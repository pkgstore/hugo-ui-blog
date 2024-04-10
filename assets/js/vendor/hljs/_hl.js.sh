#!/usr/bin/env -S bash -e

curl="$( command -v curl )"; ! [[ -x "${curl}" ]] && { echo >&2 "'curl' is not installed!"; exit 1; }

lang=(
  'apache'
  'autohotkey'
  'autoit'
  'awk'
  'cmake'
  'dns'
  'dockerfile'
  'dos'
  'excel'
  'http'
  'nginx'
  'pf'
  'pgsql'
  'powershell'
  'properties'
  'routeros'
  'twig'
  'vbscript'
)

${curl} -o 'highlight.min.js' 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js'

for i in "${lang[@]}"; do
  ${curl} -O "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/languages/${i}.min.js"
done

exit 0
