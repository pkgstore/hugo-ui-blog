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
    enabled: false
  google:
    enabled: true
  yandex:
    enabled: false

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
      enabled: true
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
      enabled: true
      categories:
        enabled: true
      tags:
        enabled: true
      authors:
        enabled: true
      related:
        enabled: true
      meta:
        enabled: true
      stats:
        enabled: true
    license:
      enabled: true
    share:
      enabled: true
      social:
        enabled: true
      qrcode:
        enabled: true
      url:
        enabled: true
      file:
        enabled: true

# -------------------------------------------------------------------------------------------------------------------- #
# Highlight.js.
# -------------------------------------------------------------------------------------------------------------------- #

highlight:
  languages:
    external:
      - 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/languages/go.min.js'
    internal:
```

## Front matter

```yml
title: '{{ ($title) }}' # Title of material.
description: ''         # Description of material
images:                 # Images from https://unsplash.com.
  - 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a'
cover:                  # Cover of material.
  crop: 'entropy'       # Crop mode controls how the image is aligned when fit=crop is set.
                        # Link: https://docs.imgix.com/apis/rendering/size/crop.
  fit: 'crop'           # The fit parameter controls how the output image is fit to its target dimensions after resizing,
                        # and how any background areas will be filled.
                        # Link: https://docs.imgix.com/apis/rendering/size/fit.
categories:             # Categories of material.
  - 'cat_01'
  - 'cat_02'
  - 'cat_03'
tags:                   # Tags of material.
  - 'tag_01'
  - 'tag_02'
  - 'tag_03'
authors:                # Authors of material.
  - 'Author_01'
  - 'Author_02'
sources:                # Sources of material.
  - ''
license: 'CC-BY-SA-4.0' # License ID (https://github.com/spdx/license-list-data/tree/main/json/details).
complexity: ''          # Complexity of material. Example: 0 / 1 / 2.
```

## Functions

- If article is in `InDev` category, then a notification appears about updating article.
- If article is in `Opinion` category, then a notification about personal opinion appears in article.
