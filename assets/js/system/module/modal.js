export function init() {
  modal('.modal');
}

function modal($selector) {
  const $el = document.querySelectorAll($selector);

  $el.forEach(($i) => {
    const $modalID = '#' + $i.id;
    if (window.location.href.indexOf($modalID) !== -1) {
      const $bsModal = new bootstrap.Modal($modalID)
      $bsModal.show();
    }
  });
}
