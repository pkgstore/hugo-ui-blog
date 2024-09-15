export const $init = () => {
  $fancybox('[data-fancybox]');
};

const $fancybox = ($selector) => {
  Fancybox.bind($selector);
};
