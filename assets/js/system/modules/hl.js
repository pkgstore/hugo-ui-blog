export const init = () => {
  highlight();
}

const highlight = () => {
  const $el = document.querySelectorAll('pre code');
  const $len = $el.length;

  document.addEventListener('DOMContentLoaded', (event) => {
    for (let $i = 0; $i < $len; ++$i) {
      hljs.highlightElement($el[$i]);
    }
  });
}
