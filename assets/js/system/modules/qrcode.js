export const $init = () => {
  $generator('[data-fn*="qrcode"]');
};

const $generator = ($selector) => {
  const $el = document.querySelectorAll($selector);
  const $len = $el.length;
  let $text;

  for (let $i = 0; $i < $len; ++$i) {
    $text = $el[$i].getAttribute('data-qr-text');
    $_qrcode($el[$i], $text);
  }
};

const $_qrcode = ($selector, $text, $size = 128) => {
  let $options;

  $options = {
    text: $text,
    width: $size,
    height: $size,
    drawer: 'svg'
  }

  return new QRCode($selector, $options);
};
