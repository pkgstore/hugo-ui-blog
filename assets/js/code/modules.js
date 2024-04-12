// hlJS languages.
import hlJS from './highlight.min';
import apache from './modules/apache.min';
import autohotkey from './modules/autohotkey.min';
import autoit from './modules/autoit.min';
import awk from './modules/awk.min';
import cmake from './modules/cmake.min';
import dns from './modules/dns.min';
import dockerfile from './modules/dockerfile.min';
import dos from './modules/dos.min';
import excel from './modules/excel.min';
import http from './modules/http.min';
import nginx from './modules/nginx.min';
import pf from './modules/pf.min';
import pgsql from './modules/pgsql.min';
import powershell from './modules/powershell.min';
import properties from './modules/properties.min';
import routerOs from './modules/routeros.min';
import twig from './modules/twig.min';
import vbscript from './modules/vbscript.min';

// Custom languages.
import ciscoCli from './modules/custom/cisco-cli';
import rpmSpec from './modules/custom/rpm-spec';

export function languages() {
  // Language: Apache.
  hlJS.registerLanguage('apache', apache);

  // Language: AutoHotKey.
  hlJS.registerLanguage('autohotkey', autohotkey);

  // Language: AutoIT.
  hlJS.registerLanguage('autoit', autoit);

  // Language: Awk.
  hlJS.registerLanguage('awk', awk);

  // Language: Cmake.
  hlJS.registerLanguage('cmake', cmake);

  // Language: DNS.
  hlJS.registerLanguage('dns', dns);

  // Language: DockerFile.
  hlJS.registerLanguage('dockerfile', dockerfile);

  // Language: DOS.
  hlJS.registerLanguage('dos', dos);

  // Language: Excel.
  hlJS.registerLanguage('excel', excel);

  // Language: HTTP.
  hlJS.registerLanguage('http', http);

  // Language: Nginx.
  hlJS.registerLanguage('nginx', nginx);

  // Language: Pf.
  hlJS.registerLanguage('pf', pf);

  // Language: PgSQL.
  hlJS.registerLanguage('pgsql', pgsql);

  // Language: PowerShell.
  hlJS.registerLanguage('powershell', powershell);

  // Language: Properties.
  hlJS.registerLanguage('properties', properties);

  // Language: RouterOS.
  hlJS.registerLanguage('routeros', routerOs);
  hlJS.registerAliases(['rsc'], {languageName: 'routeros'});

  // Language: Twig.
  hlJS.registerLanguage('twig', twig);

  // Language: vbScript.
  hlJS.registerLanguage('vbscript', vbscript);

  // Language: Cisco CLI.
  hlJS.registerLanguage('cisco-cli', ciscoCli);

  // Language: RPM Spec.
  hlJS.registerLanguage('rpm-spec', rpmSpec);
}

export function init() {
  const $el = document.querySelectorAll('pre code');
  const $len = $el.length;

  document.addEventListener('DOMContentLoaded', (event) => {
    for (let $i = 0; $i < $len; ++$i) {
      hlJS.highlightElement($el[$i]);
    }
  });
}
