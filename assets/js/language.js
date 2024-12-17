(() => {
  const $navigator = window.navigator;
  const $location = window.location;
  const $browser = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
  let $language;

  // Only do i18n at root,
  // otherwise, redirect immediately.
  if ($location.pathname !== '/') {
    $location.replace('{{ .Permalink }}');
    return 0;
  }

  const getFirstLanguage = function () {
    if (Array.isArray($navigator.languages)) {
      const $len = $navigator.languages.length;
      for (let $i = 0; $i < $len; ++$i) {
        $language = $navigator.languages[$i];
        if ($language && $language.length) return $language;
      }
    }

    // Support for other well known properties in browsers.
    const $len = $browser.length;
    for (let $i = 0; $i < $len; ++$i) {
      $language = $navigator[$browser[$i]];
      if ($language && $language.length) return $language;
    }
    return 'en';
  }

  const $preferLang = getFirstLanguage();
  ($preferLang.indexOf('ru') !== -1) ? $location.replace('/ru/') : $location.replace('/en/');
})();
