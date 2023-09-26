export function init() {
  local('[data-fn="date-local"]');
  local('[data-fn="time-local"]', 4);
}

function local($selector, $view = 0) {
  const $el = document.querySelectorAll($selector);
  let $utcDate, $localDate;

  $el.forEach(($i) => {
    $utcDate = $i.getAttribute('datetime');
    $localDate = _date($utcDate, $view);
    $i.textContent = $localDate;
  });
}

function _date($iso, $view) {
  let $out;

  const $date = new Date($iso);
  const $year = $date.getFullYear();
  const $month = _f24($date.getMonth() + 1);
  const $day = _f24($date.getDate());
  const $hours = _f24($date.getHours());
  const $minutes = _f24($date.getMinutes());
  const $seconds = _f24($date.getSeconds());

  switch ($view) {
    case 0:
      $out = $year + '/' + $month + '/' + $day + ' ' + $hours + ':' + $minutes + ':' + $seconds;
      break;
    case 1:
      $out = $year + '/' + $month + '/' + $day + ' ' + $hours + ':' + $minutes;
      break;
    case 2:
      $out = $year + '/' + $month + '/' + $day;
      break;
    case 3:
      $out = $hours + ':' + $minutes + ':' + $seconds;
      break;
    case 4:
      $out = $hours + ':' + $minutes;
      break;
    default:
      console.error('Unknown type!')
  }

  return $out;
}

function _f24($num) {
  if ($num < 10) {
    $num = '0' + $num;
  }
  return $num;
}
