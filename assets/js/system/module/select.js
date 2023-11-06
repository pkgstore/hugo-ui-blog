export function init() {
  selectAll('[data-fn*="select-all"]');
}

function selectAll($selector) {
  const $el = document.querySelectorAll($selector);

  for (let $i = 0; $i < $el.length; $i++) {
    _eventSelectAll($el[$i]);
  }
}

function _eventSelectAll($i) {
  return $i.addEventListener('click', ($e) => {
    $e.currentTarget.select();
  });
}
