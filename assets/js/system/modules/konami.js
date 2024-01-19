export const init = () => {
  konami('#modal-egg');
}

const konami = ($selector) => {
  document.addEventListener('DOMContentLoaded', () => {
    _generator($selector);
  });
}

const _generator = ($selector) => {
  const $eModal = document.querySelector($selector);
  if (!$eModal) return 0;

  const $bsModal = new bootstrap.Modal($eModal);
  const $keys = 'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba';
  let $buffer = [];
  let $lastKeyTime = Date.now();

  document.addEventListener('keydown', ($e) => {
    const $key = $e.key.toLowerCase();
    const $currentTime = Date.now();

    if ($currentTime - $lastKeyTime > 1000) $buffer = [];

    $lastKeyTime = $currentTime;
    $buffer.push($key);

    if ($buffer.join('') === $keys) $bsModal.show();
  });
}
