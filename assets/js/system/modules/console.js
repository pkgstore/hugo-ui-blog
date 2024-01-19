export const init = () => {
  msg([
    '㊙️ ⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️'
  ]);
}

const msg = ($message) => {
  const $item = $message[Math.floor(Math.random() * $message.length)];
  _log($item, 'font-size: 2em;');
}

const _log = ($text, $style = '') => {
  console.log('%c' + $text, $style);
}
