export const init = () => {
  clipboard('[data-fn*="clipboard"]');
}

const clipboard = ($selector) => {
  new ClipboardJS($selector);
}
