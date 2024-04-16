(() => {
  const $lang = (() => {
  'use strict';
  return ($lang) => {
    const $COMMENT = $lang.COMMENT('%dnl');
    const $HCM = $lang.HASH_COMMENT_MODE;
    const $QSM = $lang.QUOTE_STRING_MODE;

    const $TYPES = {
      className: 'type',
      begin: /^(Name|BuildRequires|BuildConflicts|Version|Release|Epoch|Summary|Group|License|Packager|Vendor|Icon|URL|Distribution|Prefix|Patch[0-9]*|Source[0-9]*|Requires\(?[a-z]*\)?|[a-zA-Z]+Req|Obsoletes|Recommends|Suggests|Supplements|Enhances|Provides|Conflicts|RemovePathPostfixes|Build[a-zA-Z]+|[a-zA-Z]+Arch|Auto[a-zA-Z]+)(:)/,
    };
    const $SECTIONS = {
      className: 'keyword',
      begin: /(%)(ifarch|ifnarch|ifos|ifnos|if|elifarch|elifos|elif|else|endif)/,
    };
    const $KEYWORDS = {
      className: 'keyword',
      begin: /(%)(ifarch|ifnarch|ifos|ifnos|if|elifarch|elifos|elif|else|endif)/,
    };

    return {
      name: 'rpm-spec',
      aliases: ['rpm', 'spec', 'rpm-spec', 'specfile'],
      disableAutodetect: true,
      contains: [
        $COMMENT,
        $HCM,
        $QSM,
        $TYPES,
        $SECTIONS,
        $KEYWORDS,
        {
          className: 'operator',
          begin: /[>=<]/,
        },
        {
          className: 'variable',
          begin: /%\{_/,
          end: /}/,
        },
        {
          className: 'symbol',
          begin: /%\{\?/,
          end: /}/,
        },
        {
          className: 'variable',
          begin: /%\{/,
          end: /}/,
        },
        {
          className: 'variable',
          begin: /%\${/,
          end: /}/,
        },
        {
          className: 'variable',
          begin: /\${/,
          end: /}/,
        },
        {
          className: 'variable',
          begin: /(\$[\w#@][\w_]+)/,
        },
        {
          className: 'symbol',
          begin: /%/,
          end: /[ \t\n]/,
        },
        {
          className: 'doctag',
          begin: /^\* (Mon|Tue|Wed|Thu|Fri|Sat|Sun)/,
          end: /$/,
        },
      ]
    }
  }
})();
hljs.registerLanguage('rpm-spec', $lang);
})();
