export function init() {
  clipboard('[data-fn="clipboard"]');
}

function clipboard($selector) {
  new ClipboardJS($selector);
}
