---
{{ $title := ((replace .Name "-" " ") | title) -}}
{{ $hash := (((printf "%s.%d.%s" ("6ba7b811-9dad-11d1-80b4-00c04fd430c8") (now.Unix) (delimit (shuffle (seq 999)) "")) | base64Encode) | sha1) -}}
{{ $uuid := (printf "%s-%s-5%s-%s%s-%s" (substr ($hash) 0 8) (substr ($hash) 8 4) (substr ($hash) 13 3) (index (slice "8" "9" "a" "b" | shuffle) 0) (substr ($hash) 17 3) (substr ($hash) 20 12)) -}}
{{ $date := (.Date) -}}

title: '{{ ($title) }}'
description: ''
images:
  - 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d'
cover:
  crop: 'entropy'
  fit: 'crop'
tags:
  - 'tag_01'
  - 'tag_02'
  - 'tag_03'
authors:
  - 'JohnDoe'
  - 'JaneDoe'
sources:
  - ''

date: '{{ ($date) }}'
publishDate: '{{ ($date) }}'
expiryDate: ''
lastMod: '{{ ($date) }}'

hash: '{{ ($hash) }}'
uuid: '{{ ($uuid) }}'
slug: '{{ ($uuid) }}'

draft: 1
---

<!--more-->
