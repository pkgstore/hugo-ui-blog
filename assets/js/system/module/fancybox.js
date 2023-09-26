export function init() {
  fancybox('[data-fancybox]');
}

function fancybox($selector) {
  Fancybox.bind($selector);
}
