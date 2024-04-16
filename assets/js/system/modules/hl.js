export function init() {
  highlight();
}

function highlight() {
  const $el = document.querySelectorAll('pre code');
  const $len = $el.length;
  const $codeDataList = [];
  const $codeList = [];

  for (let $i = 0; $i < $len; ++$i) {
    let $code = $el[$i];
    let $lang = Array.from($code.classList).find((c) =>
      c.startsWith('language-')
    );

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
    }

    // $codeList.forEach(($code, $i) => {
    //   $code.innerHTML = $event.data[$i];
    //   $code.setAttribute('data-highlighted', 'yes');
    //   $code.classList.add('hljs');
    //   $code.classList.add('language' + $codeDataList[$i].language);
    // });
  }

  $worker.postMessage($codeDataList);
}
