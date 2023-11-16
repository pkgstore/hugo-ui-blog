import * as modal from './module/modal';
import * as tooltip from './module/tooltip';
import * as date from './module/date';
import * as select from './module/select';
import * as share from './module/share';
import * as qrcode from './module/qrcode';
import * as navbar from './module/navbar';
import * as fancybox from './module/fancybox'
import * as clipboard from './module/clipboard'
import * as prevent_default from './module/prevent_default'
import * as search from './module/search';
import * as github from './module/api.github';

export function init() {
  modal.init();
  tooltip.init();
  date.init();
  select.init();
  share.init();
  qrcode.init();
  navbar.init();
  fancybox.init();
  clipboard.init();
  prevent_default.init();
  search.init();
  github.init();
}
