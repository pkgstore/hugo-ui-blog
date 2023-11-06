export function init() {
  popUp('[data-fn*="popup"]');
}

function popUp($selector) {
  const $el = document.querySelectorAll($selector);

  for (let $i = 0; $i < $el.length; ++$i) {
    _eventPopUp($el[$i]);
  }
}

function _eventPopUp($i) {
  return $i.addEventListener('click', ($e) => {
    $e.preventDefault();
    window.open($e.currentTarget.href, $e.currentTarget.title, 'width=640,height=480,toolbar=0,status=0');
  });
}
