export const $init = () => {
  $search('{{ "search.json" | relLangURL }}').catch(console.error);
};

const $search = async ($path) => {
  const $eResList = document.getElementById('search-results');
  const $eInput = document.getElementById('search-input');
  const $eHelp = document.getElementById('search-help');
  const $options = {
    includeScore: true,
    minMatchCharLength: 3,
    useExtendedSearch: true,
    keys: ['title', 'categories', 'tags']
  };

  if (!$eInput) return 0;

  await $_keyboard();

  const $json = await $_fetch($path);
  const $fuse = new Fuse($json, $options);

  // Execute search as each character is typed.
  $eInput.onkeyup = function (e) {
    // Run a search query (for "term") every time a letter is typed in the search box.
    if ($fuse) {
      const $results = $fuse.search(this.value.trim()); // The actual query being run using "fuse.js".
      const $len = $results.length;

      if ($len !== 0) {
        $eResList.classList.remove('d-none');
        $eHelp.classList.add('d-none');

        // Build our html if result exists.
        let $resultSet = ''; // Our results bucket.
        let $url, $title, $section, $icon;

        for (let $i = 0; $i < $len; ++$i) {
          $url = $results[$i].item.url;
          $title = $results[$i].item.title;
          $section = $results[$i].item.section;

          switch ($section) {
            case 'articles':
              $icon = 'fas fa-file-lines';
              break;
            case 'faq':
              $icon = 'fas fa-circle-question';
              break;
            case 'resources':
              $icon = 'fas fa-cube';
              break;
            default:
              $icon = '';
          }

          $resultSet += `<a class="list-group-item list-group-item-action" href="${$url}" tabindex="0">
            <span class="d-flex">
            <span class="flex-shrink-0"><i class="${$icon} fa-fw"></i></span>
            <span class="flex-grow-1 ms-3 overflow-hidden">${$title}</span>
            </span>
            </a>`;
        }

        $eResList.innerHTML = $resultSet;
      } else {
        $eResList.classList.add('d-none');
        $eHelp.classList.remove('d-none');
        $eResList.innerHTML = '';
      }
    }
  };
};

const $_fetch = async ($path) => {
  const $CACHE_TIMEOUT = 300000;
  const $nowTime = new Date().getTime();
  const $prevResponse = JSON.parse(localStorage.getItem($path));
  if ($prevResponse && Math.abs($nowTime - $prevResponse.time) < $CACHE_TIMEOUT) {
    return $prevResponse.data;
  }
  const $response = await fetch($path);
  const $json = await $response.json();
  localStorage.setItem($path, JSON.stringify({time: $nowTime, data: $json}));
  return $json;
};

const $_keyboard = async () => {
  const $eForm = document.getElementById('search-form');
  const $eInput = document.getElementById('search-input');
  const $eModal = document.getElementById('search-modal');
  const $bsModal = new bootstrap.Modal($eModal);
  let $searchModal = 0;

  // Open search modal.
  document.addEventListener('keydown', ($e) => {
    if (($e.ctrlKey && $e.code === 'Slash') || ($e.ctrlKey && $e.key === '/')) {
      $e.preventDefault();
      $bsModal.show();
      $searchModal = 1;
    }
    if ((($e.code === 'Escape') || ($e.key === 'Escape'))
      || (($e.ctrlKey && $e.code === 'Slash') || ($e.ctrlKey && $e.key === '/'))) {
      if ($searchModal) {
        $e.preventDefault();
        $bsModal.hide();
      }
    }
  });

  // Focus input search.
  $eModal.addEventListener('shown.bs.modal', ($e) => {
    $eInput.focus();

    // Disable form key "Enter".
    $eForm.addEventListener('keypress', ($e) => {
      if (($e.code === 'Enter') || ($e.key === 'Enter')) {
        $e.preventDefault();
      }
    });
  });
};
