export const $init = () => {
  $popUp('[data-fn*="popup"]');
};

const $popUp = ($selector) => {
  const $el = document.querySelectorAll($selector);
  const $len = $el.length;

  for (let $i = 0; $i < $len; ++$i) {
    $_eventPopUp($el[$i]);
  }
};

const $_eventPopUp = ($i) => {
  return $i.addEventListener('click', ($e) => {
    $e.preventDefault();
    window.open($e.currentTarget.href, $e.currentTarget.title, 'width=640,height=480,toolbar=0,status=0');
  });
};
