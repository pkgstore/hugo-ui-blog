export function init() {
  search('{{ "search.json" | relLangURL }}');
}

function search($path) {
  let $fuse;
  const $eResList = document.getElementById('search-results');
  const $eInput = document.getElementById('search-input');
  const $eHelp = document.getElementById('search-help');

  if (!$eInput) return 0;

  _keyboard();

  _fetch($path, ($data) => {
    let $options = {
      shouldSort: true,
      location: 0,
      distance: 100,
      threshold: 0.4,
      minMatchCharLength: 3,
      keys: [
        {name: 'title', weight: 0.8},
        {name: 'tags', weight: 0.3},
        {name: 'categories', weight: 0.3}
      ]
    };

    $fuse = new Fuse($data, $options);
  });

  // Execute search as each character is typed.
  $eInput.onkeyup = function (e) {
    // Run a search query (for "term") every time a letter is typed
    // in the search box.
    if ($fuse) {
      const $results = $fuse.search(this.value.trim()); // the actual query being run using fuse.js
      if ($results.length !== 0) {
        $eResList.classList.remove('d-none');
        $eHelp.classList.add('d-none');

        // Build our html if result exists.
        let $resultSet = ''; // Our results bucket.
        let $url, $title, $type;

        $results.forEach((v, i) => {
          $url = $results[i].item.url;
          $title = $results[i].item.title;
          $type = $results[i].item.type;

          $resultSet += `<a class="list-group-item list-group-item-action" href="${$url}">`
            + `<span class="d-block fw-bold">${$title}</span>`
            + `<span class="row row-cols-1 text-muted">`
            + `<span class="col">{{ (i18n "type") }}: ${$type}</span>`
            + `</span>`
            + `</a>`
        });

        $eResList.innerHTML = $resultSet;
      } else {
        $eResList.classList.add('d-none');
        $eHelp.classList.remove('d-none');
        $eResList.innerHTML = '';
      }
    }
  }
}

function _fetch($path, $callback) {
  fetch($path).then(($response) => {
    return $response.json();
  }).then(($data) => {
    if ($callback) $callback($data.data);
  });
}

function _keyboard() {
  const $eForm = document.getElementById('search-form');
  const $eInput = document.getElementById('search-input');
  const $eModal = document.getElementById('search-modal');
  const $bsModal = new bootstrap.Modal($eModal);
  let $searchModal = 0;

  // Open search modal.
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.code === 'Slash') || (e.ctrlKey && e.key === '/')) {
      e.preventDefault();
      $bsModal.show();
      $searchModal = 1;
    }
    if (((e.code === 'Escape') || (e.key === 'Escape'))
      || ((e.ctrlKey && e.code === 'Slash') || (e.ctrlKey && e.key === '/'))) {
      if ($searchModal) {
        e.preventDefault();
        $bsModal.hide()
      }
    }
  });

  // Focus input search.
  $eModal.addEventListener('shown.bs.modal', (e) => {
    $eInput.focus();

    // Disable form key "Enter".
    $eForm.addEventListener('keypress', (e) => {
      if ((e.code === 'Enter') || (e.key === 'Enter')) {
        e.preventDefault();
      }
    });
  });
}
