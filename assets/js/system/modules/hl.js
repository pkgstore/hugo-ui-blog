export function init() {
  highlight();
}

function highlight() {
  const $el = document.querySelectorAll('pre code');
  const $len = $el.length;
  let $codeDataList = [], $codeList = [], $code = [], $lang =[];

  for (let $i = 0; $i < $len; ++$i) {
    $code = $el[$i];
    $lang = [...$code.classList].find(($c) => $c.startsWith('language-'));

    if (!$lang) $lang = 'plaintext';

    $codeDataList.push({
      language: $lang.replace('language-', ''),
      code: $code.textContent,
    });
    $codeList.push($code);
  }

  const $worker = new Worker('/js/hl.worker.js');

  $worker.onmessage = ($event) => {
    for (let $i = 0; $i < $len; ++$i) {
      $codeList[$i].innerHTML = $event.data[$i];
      $codeList[$i].classList.add('hljs');
      $codeList[$i].classList.add('language-' + $codeDataList[$i].language);
    }
  }

  $worker.postMessage($codeDataList);
}
