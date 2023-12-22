export const init = () => {
  highlight();
}

const highlight = () => {
  const $code = document.querySelectorAll('pre code');

  document.addEventListener('DOMContentLoaded', (event) => {
    $code.forEach(($i) => {
      hljs.highlightElement($i);
    });
  });
}
