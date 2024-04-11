(() => {
  var $hljsRpmSpec = (() => {
    'use strict';
    return () => {
      const $regex = hljs.regex;
      const $COMMENT = hljs.inherit(hljs.COMMENT(), {match: [/(^|\s)/, /#.*$/], scope: {2: 'comment'}});
      return {
        name: 'rpm-spec',
        aliases: ['rpm', 'spec', 'rpm-spec', 'specfile'],
        contains: [
          $COMMENT,
          hljs.HASH_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: 'type',
            begin: /^(Name|BuildRequires|BuildConflicts|Version|Release|Epoch|Summary|Group|License|Packager|Vendor|Icon|URL|Distribution|Prefix|Patch[0-9]*|Source[0-9]*|Requires\(?[a-z]*\)?|[a-zA-Z]+Req|Obsoletes|Recommends|Suggests|Supplements|Enhances|Provides|Conflicts|RemovePathPostfixes|Build[a-zA-Z]+|[a-zA-Z]+Arch|Auto[a-zA-Z]+)(:)/,
          },
          {
            className: 'section',
            begin: /(%)(?:package|prep|generate_buildrequires|sourcelist|patchlist|build|description|install|verifyscript|clean|changelog|check|pre[a-z]*|post[a-z]*|trigger[a-z]*|files)/,
          },
          {
            className: 'keyword',
            begin: /(%)(ifarch|ifnarch|ifos|ifnos|if|elifarch|elifos|elif|else|endif)/,
          },
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
            begin: $regex.concat(/\$[\w\d#@][\w\d_]*/, `(?![\\w\\d])(?![$])`),
          },
          {
            className: 'symbol',
            begin: /%/,
            end: /[ \t\n]/
          },
          {
            className: 'symbol font-weight-bold',
            begin: /^\* (Mon|Tue|Wed|Thu|Fri|Sat|Sun)/,
            end: /$/,
          },
        ]
      }
    };
  })();
  hljs.registerLanguage('rpm-spec', $hljsRpmSpec);
})();
