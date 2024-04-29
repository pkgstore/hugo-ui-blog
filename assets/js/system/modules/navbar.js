export const $init = () => {
  $toggle('.navbar');
};

const $toggle = ($selector) => {
  const $header = document.querySelector($selector);
  const $headroom = new Headroom($header);
  $headroom.init();
};
