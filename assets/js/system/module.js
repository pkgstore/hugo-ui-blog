// import * as tabs from './module/tabs';
import * as modal from './module/modal';
import * as tooltip from './module/tooltip';
import * as date from './module/date';
import * as select from './module/select';
import * as share from './module/share';
import * as qrcode from './module/qrcode';
import * as navbar from './module/navbar';
// import * as hljs from './module/hljs';
import * as fancybox from './module/fancybox'
// import * as site_resize from './module/site_resize';
// import * as search from './module/search';
// import * as konami from './module/konami';
// import * as console from './module/console';

export function init() {
  // tabs.init();
  modal.init();
  tooltip.init();
  date.init();
  select.init();
  share.init();
  qrcode.init();
  navbar.init();
  // hljs.init();
  fancybox.init();
  // site_resize.init();
  // search.init();
  // konami.init();
  // console.init();
}
