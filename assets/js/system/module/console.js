export function init() {
  msg([
    '㊙️ ⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️'
  ]);
}

function msg($message) {
  const $item = $message[Math.floor(Math.random() * $message.length)];
  _log($item, 'font-size: 2em;');
}

function _log($text, $style = '') {
  console.log('%c' + $text, $style);
}
