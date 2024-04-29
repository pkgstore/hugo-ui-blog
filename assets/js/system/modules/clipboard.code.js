export const $init = () => {
  $clipboard('.shortcode-codeblock').catch(console.error);
  $clipboard('.shortcode-file').catch(console.error);
};

const $clipboard = async ($selector) => {
  const $el = document.querySelectorAll($selector);
  const $len = $el.length;
  for (let $i = 0; $i < $len; ++$i) {
    const $lines = $el[$i].querySelectorAll('[data-lang] > .line');
    const $button = $el[$i].querySelector('[data-fn*="clipboard"]');
    const $code = Array.from($lines).map($line => {
      return Array.from($line.childNodes).map($node => $node.textContent).join('');
    });
    const $text = $code.join('').replace(/\n{3,}/g, '\n\n');
    const $icon = $button.firstElementChild.classList.value;

    $button.addEventListener('click', ($e) => {
        $e.preventDefault();
        navigator.clipboard.writeText($text);
        $button.firstElementChild.className = 'fas fa-check fa-fw';
        setTimeout(() => {
          $button.firstElementChild.className = $icon;
        }, 1000);
      }
    );
  }
};
