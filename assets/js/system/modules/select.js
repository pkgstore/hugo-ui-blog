export const $init = () => {
  $selectAll('[data-fn*="select-all"]');
};

const $selectAll = ($selector) => {
  const $el = document.querySelectorAll($selector);
  const $len = $el.length;

  for (let $i = 0; $i < $len; ++$i) {
    $_eventSelectAll($el[$i]);
  }
};

const $_eventSelectAll = ($i) => {
  return $i.addEventListener('click', ($e) => {
    $e.currentTarget.select();
  });
};
