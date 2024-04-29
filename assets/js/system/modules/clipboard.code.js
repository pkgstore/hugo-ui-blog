export const $init = () => {
  $clipboard('.shortcode-codeblock', '[data-fn*="clipboard"]').catch(console.error);
  $clipboard('.shortcode-file', '[data-fn*="clipboard"]').catch(console.error);
};

const $clipboard = async ($shortcode, $button) => {
  const $el = document.querySelectorAll($shortcode);
  const $len = $el.length;
  for (let $i = 0; $i < $len; ++$i) {
    const $eLines = $el[$i].querySelectorAll('[data-lang] > .line');
    const $eButton = $el[$i].querySelector($button);
    const $cIcon = $eButton.firstElementChild.classList;
    const $fa = $cIcon[1];

    const $code = Array.from($eLines).map($line => {
      return Array.from($line.childNodes).map($node => $node.textContent).join('');
    });

    const $text = $code.join('').replace(/\n{3,}/g, '\n\n');

    $eButton.addEventListener('click', ($e) => {
        $e.preventDefault();
        navigator.clipboard.writeText($text);
        $cIcon.replace($fa, 'fa-check');
        setTimeout(() => {
          $cIcon.replace('fa-check', $fa);
        }, 500);
      }
    );
  }
};
