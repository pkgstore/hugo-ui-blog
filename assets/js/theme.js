/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const $getStoredTheme = () => localStorage.getItem('ui.theme');
  const $setStoredTheme = $theme => localStorage.setItem('ui.theme', $theme);

  const $getPreferredTheme = () => {
    const $storedTheme = $getStoredTheme();
    if ($storedTheme) return $storedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const $setTheme = $theme => {
    if ($theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme',
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      );
    } else {
      document.documentElement.setAttribute('data-bs-theme', $theme);
    }
  };

  $setTheme($getPreferredTheme());

  const $showActiveTheme = ($theme, $focus = false) => {
    const $themeSwitcher = document.querySelector('.ui-theme');
    if (!$themeSwitcher) return;

    const $btnToActive = document.querySelector(`[data-bs-theme-value="${$theme}"]`);
    const $el = document.querySelectorAll('[data-bs-theme-value]');
    const $len = $el.length;

    for (let $i = 0; $i < $len; ++$i) {
      $el[$i].classList.remove('active');
      $el[$i].setAttribute('aria-pressed', 'false');
    }

    $btnToActive.classList.add('active');
    $btnToActive.setAttribute('aria-pressed', 'true');

    if ($focus) $themeSwitcher.focus();
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const $storedTheme = $getStoredTheme();

    if ($storedTheme !== 'light' && $storedTheme !== 'dark') {
      $setTheme($getPreferredTheme());
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    $showActiveTheme($getPreferredTheme());

    const $el = document.querySelectorAll('[data-bs-theme-value]');
    const $len = $el.length;

    for (let $i = 0; $i < $len; ++$i) {
      $el[$i].addEventListener('click', () => {
        const $theme = $el[$i].getAttribute('data-bs-theme-value');
        $setStoredTheme($theme);
        $setTheme($theme);
        $showActiveTheme($theme, true);
      });
    }
  });
})();
