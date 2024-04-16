#!/usr/bin/env -S bash -e
#
# Adding repository in Packagist.
#
# @package    Bash
# @author     Kai Kimera <mail@kai.kim>
# @copyright  2024 iHub TO
# @license    MIT
# @version    0.0.1
# @link       https://lib.onl
# -------------------------------------------------------------------------------------------------------------------- #

(( EUID == 0 )) && { echo >&2 'This script should not be run as root!'; exit 1; }
curl="$( command -v curl )"; ! [[ -x "${curl}" ]] && { echo >&2 "'curl' is not installed!"; exit 1; }

# -------------------------------------------------------------------------------------------------------------------- #
# INITIALIZATION.
# -------------------------------------------------------------------------------------------------------------------- #

init() {
  hlJS
  vendor
}

# -------------------------------------------------------------------------------------------------------------------- #
# HLJS.
# -------------------------------------------------------------------------------------------------------------------- #

hlJS() {
  local lang=(
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

  # hlJS: Core.
  echo '' && echo "--- [UI/CODE] Update: 'hlJS Core'" && echo ''
  ${curl} -o 'js/code/highlight.min.js' \
    'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js'

  # hlJS: Languages.
  for i in "${lang[@]}"; do
    echo '' && echo "--- [UI/CODE] Update: 'hlJS ${i}'" && echo ''
    ${curl} -o "js/code/${i}.min.js" \
      "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/languages/${i}.min.js"
  done
}

# -------------------------------------------------------------------------------------------------------------------- #
# VENDOR.
# -------------------------------------------------------------------------------------------------------------------- #

vendor() {
  # Bootstrap.
  echo '' && echo "--- [UI/VENDOR] Update: 'Bootstrap'" && echo ''
  ${curl} -o 'css/vendor/bootstrap.min.css' \
    'https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css'
  ${curl} -o 'css/vendor/bootstrap.min.css.map' \
    'https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css.map'
  ${curl} -o 'js/vendor/bootstrap.bundle.min.js.map' \
    'https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js.map'
  ${curl} -o 'js/vendor/bootstrap.bundle.min.js' \
    'https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js'

  # FancyBox.
  echo '' && echo "--- [UI/VENDOR] Update: 'FancyBox'" && echo ''
  ${curl} -o 'css/vendor/fancybox.min.css' \
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5/dist/fancybox/fancybox.css'
  ${curl} -o 'js/vendor/fancybox.min.js' \
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5/dist/fancybox/fancybox.umd.js'

  # Font Awesome.
  echo '' && echo "--- [UI/VENDOR] Update: 'Font Awesome'" && echo ''
  ${curl} -o 'css/vendor/fontawesome.min.css' \
    'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css' \
    && sed -i '' 's|../webfonts/|/fonts/|g' 'css/vendor/fontawesome.min.css'

  # ClipboardJS.
  echo '' && echo "--- [UI/VENDOR] Update: 'ClipboardJS'" && echo ''
  ${curl} -o 'js/vendor/clipboard.min.js' \
    'https://cdn.jsdelivr.net/npm/clipboard/dist/clipboard.min.js'

  # Fuse Search.
  echo '' && echo "--- [UI/VENDOR] Update: 'Fuse Search'" && echo ''
  ${curl} -o 'js/vendor/fuse.min.js' \
    'https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js'

  # Headroom.
  echo '' && echo "--- [UI/VENDOR] Update: 'Headroom'" && echo ''
  ${curl} -o 'js/vendor/headroom.min.js' \
    'https://cdn.jsdelivr.net/npm/headroom.js/dist/headroom.min.js'

  # Easy QRCode.
  echo '' && echo "--- [UI/VENDOR] Update: 'Easy QRCode'" && echo ''
  ${curl} -o 'js/vendor/qrcode.min.js' \
    'https://cdn.jsdelivr.net/npm/easyqrcodejs@4/dist/easy.qrcode.min.js'
}

# -------------------------------------------------------------------------------------------------------------------- #
# -------------------------------------------------< INIT FUNCTIONS >------------------------------------------------- #
# -------------------------------------------------------------------------------------------------------------------- #

init "$@"; exit 0
