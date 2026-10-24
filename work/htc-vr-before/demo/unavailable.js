let toastTimer;
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || !['Object list', 'Local gizmo', 'Measure', 'Duplicate'].includes(button.getAttribute('aria-label'))) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  let toast = document.querySelector('.feature-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'feature-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.append(toast);
  }
  toast.textContent = '該功能尚未開放，敬請期待';
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 2600);
}, true);
