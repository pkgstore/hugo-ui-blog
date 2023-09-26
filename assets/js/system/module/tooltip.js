export function init() {
  tooltip('[data-bs-tooltip]')
}

function tooltip($selector) {
  const $el = document.querySelectorAll($selector);
  return [...$el].map($el => new bootstrap.Tooltip($el));
}
