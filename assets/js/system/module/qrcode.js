export function init() {
  generator('[data-fn*="qrcode"]');
}

function generator($selector) {
  const $el = document.querySelectorAll($selector);
  let $text;

  for (let $i = 0; $i < $el.length; $i++) {
    $text = $el[$i].getAttribute('data-qr-text');
    _qrcode($el[$i], $text);
  }
}

function _qrcode($selector, $text, $size = 128) {
  let $options;

  $options = {
    text: $text,
    width: $size,
    height: $size,
    drawer: 'svg'
  }

  return new QRCode($selector, $options);
}
