import * as modal from './modules/modal';
import * as tooltip from './modules/tooltip';
import * as date from './modules/date';
import * as select from './modules/select';
import * as share from './modules/share';
import * as qrcode from './modules/qrcode';
import * as navbar from './modules/navbar';
import * as fancybox from './modules/fancybox';
import * as clipboardCode from './modules/clipboard.code';
import * as prevent_default from './modules/prevent_default';
import * as search from './modules/search';
import * as github from './modules/api.github';

export function init() {
  modal.$init();
  tooltip.$init();
  date.$init();
  select.$init();
  share.$init();
  qrcode.$init();
  navbar.$init();
  fancybox.$init();
  clipboardCode.$init();
  prevent_default.$init();
  search.$init();
  github.$init();
}
