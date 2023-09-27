# Hugo UI Blog

Blog theme for Hugo.

## Install

```sh
git submodule add 'https://github.com/pkgstore/hugo-ui-blog.git' 'themes/ui-blog'
```

## Update

```sh
git submodule update --remote --merge
```

## Uninstall

```sh
m='ui-blog'; git submodule deinit -f "themes/${m}"; git rm -r --cached "themes/${m}"; rm -rf ".git/modules/themes/${m}"; rm -rf "themes/${m}"
```

## Configuration

Theme configuration for `params.yml`.

```yml
# -------------------------------------------------------------------------------------------------------------------- #
# API.
# -------------------------------------------------------------------------------------------------------------------- #

api:
  user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'

# -------------------------------------------------------------------------------------------------------------------- #
# Search.
# -------------------------------------------------------------------------------------------------------------------- #

search:
  bing:
    enabled: 0
  google:
    enabled: 1
  yandex:
    enabled: 0

# -------------------------------------------------------------------------------------------------------------------- #
# Taxonomy.
# -------------------------------------------------------------------------------------------------------------------- #

taxonomy:
  authors:
    grid:
      cols: 2
    cover:
      size: '120px'
      avatar:
        size: '256'
  categories:
    grid:
      cols: 3
    cover:
      size: '96px'
      icon:
        name: 'far fa-folder-open'
        size: '2x'

# -------------------------------------------------------------------------------------------------------------------- #
# Node.
# -------------------------------------------------------------------------------------------------------------------- #

node:
  cover:
    image:
      enabled: 1
      placeholder: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a'
      crop: 'entropy'
      fit: 'crop'
      lg:
        width: 1600
        height: 900
      md:
        width: 160
        height: 160
  tabs:
    info:
      enabled: 1
      categories:
        enabled: 1
      tags:
        enabled: 1
      authors:
        enabled: 1
      related:
        enabled: 1
      meta:
        enabled: 1
      stats:
        enabled: 1
    license:
      enabled: 1
    share:
      enabled: 1
      social:
        enabled: 1
      qrcode:
        enabled: 1
      url:
        enabled: 1
      file:
        enabled: 1

# -------------------------------------------------------------------------------------------------------------------- #
# Highlight.js.
# -------------------------------------------------------------------------------------------------------------------- #

highlight:
  styles:
    external:
      - 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/styles/agate.min.css'
    internal:
  scripts:
    external:
      - 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js'
    internal:
```

## Functions

- If article is in `InDev` category, then a notification appears about updating article.
- If article is in `Opinion` category, then a notification about personal opinion appears in article.
