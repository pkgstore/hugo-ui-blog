export function init() {
  modal('.modal');
}

function modal($selector) {
  const $el = document.querySelectorAll($selector);
  const $length = $el.length;

  for (let $i = 0; $i < $length; ++$i) {
    const $modalID = '#' + $el[$i].id;
    if (window.location.href.indexOf($modalID) !== -1) {
      const $bsModal = new bootstrap.Modal($modalID)
      $bsModal.show();
    }
  }
}
