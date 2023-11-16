export const init = () => {
  github('.shortcode .gh-repo', 'repos').catch(console.error);
  github('.shortcode .gh-user', 'users').catch(console.error);
}

const github = async ($selector, $type) => {
  const $emojis = await _fetch('{{ (site.Params.api.github.url) }}/emojis');
  const $el = document.querySelectorAll($selector);
  const $len = $el.length;

  for (let $i = 0; $i < $len; ++$i) {
    const $name = $el[$i].getAttribute('data-' + $type);
    const $data = await _fetch('{{ (site.Params.api.github.url) }}/' + $type + '/' + $name);

    $data.description = ($data.description || '').replace(/:\w+:/g, ($match) => {
      const $name = $match.substring(1, $match.length - 1);
      const $emoji = $emojis[$name];

      if ($emoji) {
        return `<img class="gh-repo-emoji" src="${$emoji}" alt="${$name}"/>`;
      }

      return $match;
    });

    if ($data.html_url && ($type === 'repos')) {
      $el[$i].querySelector('a.gh-repo-avatar').setAttribute('href', $data.html_url);
      $el[$i].querySelector('img.gh-repo-avatar').setAttribute('src', $data.owner.avatar_url);
      $el[$i].querySelector('a.gh-repo-name').setAttribute('href', $data.html_url);
      $el[$i].querySelector('a.gh-repo-name').innerHTML = $data.name;
      $el[$i].querySelector('.gh-repo-subscribers').innerHTML = $data.subscribers_count;
      $el[$i].querySelector('.gh-repo-stars').innerHTML = $data.stargazers_count;
      $el[$i].querySelector('.gh-repo-forks').innerHTML = $data.forks_count;
      $el[$i].querySelector('.gh-repo-description').innerHTML = $data.description;
      $el[$i].querySelector('.gh-repo-owner').innerHTML = $data.owner.login;
      $el[$i].querySelector('.gh-repo-language').innerHTML = $data.language;
    }

    if ($data.html_url && ($type === 'users')) {
      $el[$i].querySelector('a.gh-user-avatar').setAttribute('href', $data.html_url);
      $el[$i].querySelector('img.gh-user-avatar').setAttribute('src', $data.avatar_url);
      $el[$i].querySelector('a.gh-user-name').setAttribute('href', $data.html_url);
      $el[$i].querySelector('a.gh-user-name').innerHTML = $data.name ? $data.name : $data.login;
      $el[$i].querySelector('.gh-user-bio').innerHTML = $data.bio;
      $el[$i].querySelector('.gh-user-repos').innerHTML = $data.public_repos;
      $el[$i].querySelector('.gh-user-followers').innerHTML = $data.followers;
      $el[$i].querySelector('.gh-user-following').innerHTML = $data.following;
    }
  }
}

const _fetch = async ($url) => {
  const $token = atob('{{ (site.Params.api.github.token) }}');
  const $headers = new Headers({
    'Accept': 'application/vnd.github+json',
    'Authorization': 'Bearer ' + $token,
    'User-Agent': '{{ (site.Params.api.user_agent) }}'
  });
  const $CACHE_TIMEOUT = 300000;
  const $nowTime = new Date().getTime();
  const $prevResponse = JSON.parse(localStorage.getItem($url));
  if ($prevResponse && Math.abs($nowTime - $prevResponse.time) < $CACHE_TIMEOUT) {
    return $prevResponse.data;
  }
  const $response = await fetch($url, {headers: $headers});
  const $json = await $response.json();
  localStorage.setItem($url, JSON.stringify({time: $nowTime, data: $json}));
  return $json;
}
