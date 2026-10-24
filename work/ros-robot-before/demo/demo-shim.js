// Static stand-in for the Flask backend of robot_monitor, so the dashboard runs
// as plain files inside the portfolio:
//   /api/csv, /api/pose          -> data/*.json (exported from the real CSVs)
//   /api/ai-diagnosis-stream/*   -> a rule-based diagnosis streamed as SSE.
//                                   No API key: this mimics the model's
//                                   five-section answer from the snapshot.
// Video paths are rewritten in index.html (videos are compressed copies).
(() => {
  const ARRIVE = 0.42
  const SLOWDOWN = 1.2
  const MID = 1.0
  const FINAL_YAWS = {
    two_point_loop: { 1: 180, 2: 180 },
    triangle_loop: { 1: 45, 2: -90, 3: 135 },
    square_loop: { 1: 90, 2: 0, 3: -90, 4: 180 },
    hexagon_loop: { 1: 150, 2: 90, 3: 35, 4: -35, 5: -90, 6: -155 },
  }
  const num = (v) => (v === null || v === undefined || v === "" || Number.isNaN(+v) ? null : +v)
  const f = (v, d = 3, u = "") => (num(v) === null ? "未知" : `${num(v).toFixed(d)}${u}`)
  const wrap = (a) => ((((a + 180) % 360) + 360) % 360) - 180

  function finalYaw(s, wp) {
    const mode = String(s.mode || "")
    for (const [route, yaws] of Object.entries(FINAL_YAWS)) if (mode.includes(route)) return yaws[wp] ?? null
    return null
  }

  // Port of build_behavior_hint() in app.py.
  function behavior(s) {
    const st = String(s.strategy || "")
    const wp = num(s.waypoint)
    const d = num(s.distance)
    const target = wp !== null ? `目標點 ${wp}` : "目前目標點"
    if (st === "ALIGN_YAW") {
      const fy = finalYaw(s, wp)
      const cy = num(s.current_yaw_deg)
      const arrived = d !== null && d <= ARRIVE ? "已到達" : "已接近"
      if (fy !== null && cy !== null)
        return `${arrived}${target}（distance=${f(d, 2, "m")}），正在原地對齊指定朝向 ${f(fy, 1, "°")}；目前朝向 ${f(cy, 1, "°")}，還差約 ${f(Math.abs(wrap(fy - cy)), 1, "°")}。`
      return `${arrived}${target}，正在原地轉向對齊指定朝向。`
    }
    if (st === "ROTATE_ONLY") return `尚未朝準${target}，先原地轉向；到目標方向還差約 ${f(Math.abs(num(s.yaw_error_deg) ?? 0), 1, "°")}，距離 ${f(d, 2, "m")}。`
    if (["GO_TO_TARGET", "MID_APPROACH", "FINAL_APPROACH"].includes(st)) {
      let why
      if (st === "GO_TO_TARGET" && d !== null && d > SLOWDOWN) why = `距離仍大於 ${SLOWDOWN.toFixed(2)}m 減速門檻，維持巡航速度`
      else if (st === "GO_TO_TARGET") why = "策略仍為 GO_TO_TARGET"
      else if (st === "MID_APPROACH") why = `已進入 ${SLOWDOWN.toFixed(2)}m 減速範圍，使用中段接近速度`
      else why = `距離已小於 ${MID.toFixed(2)}m，使用最後接近速度`
      return `正在前往${target}，剩餘 ${f(d, 2, "m")}；${why}（cmd_v=${f(s.cmd_v ?? s.v_cmd, 3, "m/s")}）。`
    }
    if (st === "BACKWARD_RETURN") return `以倒退模式返回${target}，剩餘 ${f(d, 2, "m")}。`
    return st ? `目前策略為 ${st}。` : "目前無導航策略資料，可能位於路徑起點或停止狀態。"
  }

  function checks(s) {
    const out = []
    const cmdV = num(s.cmd_v ?? s.v_cmd)
    const realV = num(s.real_v)
    const cmdW = num(s.cmd_w ?? s.w_cmd)
    const realW = num(s.real_w)
    const pl = num(s.pwm_left)
    const pr = num(s.pwm_right)
    const ls = num(s.left_speed)
    const rs = num(s.right_speed)
    const starting = (num(s.time) ?? 99) < 3 && Math.abs(realV ?? 0) < 0.02
    if (starting) {
      out.push({ ok: true, text: `起步階段：cmd_v=${f(cmdV, 3)}、real_v=${f(realV, 3)}，輪速尚未建立屬正常加速延遲` })
    } else if (cmdV !== null && realV !== null) {
      const gap = realV - cmdV
      out.push({
        ok: Math.abs(gap) <= Math.max(0.08, Math.abs(cmdV) * 0.35),
        text: `線速度 cmd_v=${f(cmdV, 3)} 與 real_v=${f(realV, 3)}，差 ${f(gap, 3, " m/s")}`,
        issue: "實際線速度與命令落差偏大",
        cause: "輪胎打滑、地面摩擦變化，或里程計回授延遲",
        fix: "比對該段影片是否有打滑或碰撞，並檢查速度 PID 的 Ki 與加速度上限",
      })
    }
    if (!starting && cmdW !== null && realW !== null) {
      const sameSign = Math.sign(cmdW) === Math.sign(realW) || Math.abs(cmdW) < 0.05 || Math.abs(realW) < 0.05
      out.push({
        ok: sameSign && Math.abs(realW - cmdW) <= Math.max(0.25, Math.abs(cmdW) * 0.5),
        text: `角速度 cmd_w=${f(cmdW, 3)} 與 real_w=${f(realW, 3)}`,
        issue: sameSign ? "轉向響應與命令落差偏大" : "實際轉向方向與命令相反",
        cause: sameSign ? "轉向時左右輪負載不均或馬達死區" : "左右輪 PWM 符號或馬達接線方向不一致",
        fix: sameSign ? "調整轉向增益並確認最小 PWM 死區補償" : "確認 physical_left/right_pwm_signed 的正負定義與馬達方向",
      })
    }
    if (!starting && pl !== null && pr !== null && cmdW !== null && Math.abs(cmdW) < 0.1 && cmdV && Math.abs(cmdV) > 0.1) {
      const diff = Math.abs(Math.abs(pl) - Math.abs(pr))
      out.push({
        ok: diff < 0.06,
        text: `直行時 PWM 左 ${f(pl * 100, 1, "%")}、右 ${f(pr * 100, 1, "%")}`,
        issue: "直行時左右輪 PWM 差異明顯",
        cause: "兩側馬達或輪徑特性不同，控制器以 PWM 差補償偏航",
        fix: "做單輪速度校正，或在低階控制加入左右輪增益補償",
      })
    }
    if (ls !== null && rs !== null && cmdV && Math.abs(cmdV) > 0.1 && Math.abs(cmdW ?? 0) < 0.1 && Math.sign(ls) !== Math.sign(rs) && Math.abs(ls) > 0.05 && Math.abs(rs) > 0.05) {
      out.push({
        ok: false,
        text: `前進時左右輪速度 ${f(ls, 3)} / ${f(rs, 3)} 方向相反`,
        issue: "前進命令下左右輪轉向相反",
        cause: "輪速回授的正負號定義不一致",
        fix: "確認 physical_left_speed 與 physical_right_speed 的方向設定",
      })
    }
    if (num(s.normalized_dtw) !== null) {
      out.push({
        ok: num(s.normalized_dtw) < 0.15,
        text: `機器人與 ArUco 軌跡 normalized DTW=${f(s.normalized_dtw, 3)}`,
        issue: "機器人座標與 ArUco 追蹤位置不一致",
        cause: "里程計累積漂移，或 ArUco 追蹤受遮擋、角度影響",
        fix: "這對替代實境的觸碰位置風險較高，建議重新對齊座標原點並檢查追蹤品質",
      })
    }
    return out
  }

  function diagnose(s, rag) {
    const c = checks(s)
    const bad = c.filter((x) => !x.ok)
    const where = `第 ${(num(s.loop) ?? 0) + 1} 圈 · t=${f(s.time, 1, "s")} · 位置 (${f(s.x, 2)}, ${f(s.y, 2)})`
    const lines = []
    lines.push(`**1. 行為摘要**`)
    lines.push(`${where}。${rag ? behavior(s) : `策略 ${s.strategy || "未知"}，目標點 ${s.waypoint ?? "未知"}，距離 ${f(s.distance, 2, "m")}。`}`)
    lines.push("")
    lines.push(`**2. 數據一致性檢查**`)
    c.slice(0, 3).forEach((x) => lines.push(`- ${x.ok ? "✓" : "⚠"} ${x.text}`))
    if (!c.length) lines.push("- 目前時間點缺少可比對的命令與實際值。")
    lines.push("")
    lines.push(`**3. 發現異常**`)
    lines.push(bad.length ? bad.map((x) => x.issue).join("；") + "。" : "此時間點命令與實際響應一致，未發現明顯異常。")
    lines.push("")
    lines.push(`**4. 可能原因**`)
    lines.push(bad.length ? bad.map((x) => x.cause).join("；") + "。" : "—")
    lines.push("")
    lines.push(`**5. 修正建議**`)
    lines.push(bad.length ? bad.map((x) => x.fix).join("；") + "。" : "可拖動時間軸到轉彎或停靠點，再檢查一次。")
    lines.push("")
    lines.push(`※ 作品集示範模式：此回覆由規則依當下 snapshot 產生，未連接 AI API。實際平台會把相同資料${rag ? "與 RAG 規則文件" : ""}送給模型分析。`)
    return lines.join("\n")
  }

  function sseStream(text, mode) {
    const enc = new TextEncoder()
    const chunks = text.match(/[\s\S]{1,6}/g) || []
    const started = performance.now()
    return new ReadableStream({
      async start(controller) {
        await new Promise((r) => setTimeout(r, 450))
        for (const piece of chunks) {
          controller.enqueue(enc.encode(`event: delta\ndata: ${JSON.stringify({ text: piece })}\n\n`))
          await new Promise((r) => setTimeout(r, 14))
        }
        const elapsed = (performance.now() - started) / 1000
        controller.enqueue(enc.encode(`event: done\ndata: ${JSON.stringify({ backend_elapsed: elapsed, openai_elapsed: null, model: "demo-rules", mode })}\n\n`))
        controller.close()
      },
    })
  }

  const realFetch = window.fetch.bind(window)
  window.fetch = (input, init) => {
    const url = typeof input === "string" ? input : input.url
    if (url === "/api/csv") return realFetch("data/csv.json", init)
    if (url === "/api/pose") return realFetch("data/pose.json", init)
    const m = url.match(/^\/api\/ai-diagnosis(?:-stream)?\/(no_rag|with_rag)/)
    if (m) {
      let body = {}
      try { body = JSON.parse(init?.body || "{}") } catch {}
      const text = diagnose(body.snapshot || {}, m[1] === "with_rag")
      return Promise.resolve(new Response(sseStream(text, m[1]), { status: 200, headers: { "Content-Type": "text/event-stream" } }))
    }
    return realFetch(input, init)
  }
})()
