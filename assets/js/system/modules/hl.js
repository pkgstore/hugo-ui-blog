export function init() {
  highlight();
}

function highlight() {
  addEventListener('load', () => {
    const $el = document.querySelectorAll('pre code');
    const $len = $el.length;

    for (let $i = 0; $i < $len; ++$i) {
      const worker = new Worker('/js/hl.worker.js');
      worker.onmessage = (e) => {
        $el[$i].innerHTML = e.data;
      }
      worker.postMessage($el[$i].textContent);
    }
  });
}
