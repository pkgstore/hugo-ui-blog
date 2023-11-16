export const init = () => {
  tooltip('[data-bs-tooltip]')
}

const tooltip = ($selector) => {
  const $el = document.querySelectorAll($selector);
  return [...$el].map($el => new bootstrap.Tooltip($el, {
    container: 'body'
  }));
}
