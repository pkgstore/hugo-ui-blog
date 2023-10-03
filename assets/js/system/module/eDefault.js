export function init() {
  eDefault('[data-fn*="a"]');
}

function eDefault($selector) {
  const $el = document.querySelectorAll($selector);

  $el.forEach(($i) => {
    _preventDefault($i);
  });
}

function _preventDefault($i) {
  return $i.addEventListener('click', ($e) => {
    $e.preventDefault();
  });
}
