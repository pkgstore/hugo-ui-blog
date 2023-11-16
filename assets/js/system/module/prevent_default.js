export const init = () => {
  prevent('[data-fn*="preventDefault"]');
}

const prevent = ($selector) => {
  const $el = document.querySelectorAll($selector);

  $el.forEach(($i) => {
    _preventDefault($i);
  });
}

const _preventDefault = ($i) => {
  return $i.addEventListener('click', ($e) => {
    $e.preventDefault();
  });
}
