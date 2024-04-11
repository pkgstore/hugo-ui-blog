(() => {
  var $hljsRpmSpec = (() => {
    'use strict';
    return () => {
      const $regex = hljs.regex;
      const $COMMENT = hljs.inherit(hljs.COMMENT(), {match: [/(^|\s)/, /#.*$/], scope: {2: 'comment'}});
      const $KEYWORDS = [
        'case',
        'do',
        'done',
        'elif',
        'else',
        'esac',
        'fi',
        'for',
        'function',
        'if',
        'in',
        'select',
        'then',
        'until',
        'while',
      ];
      const $SHELL_BUILT_INS = [
        'break',
        'cd',
        'continue',
        'eval',
        'exec',
        'exit',
        'export',
        'getopts',
        'hash',
        'pwd',
        'readonly',
        'return',
        'shift',
        'test',
        'times',
        'trap',
        'umask',
        'unset',
      ];
      const $BASH_BUILT_INS = [
        'alias',
        'bind',
        'builtin',
        'caller',
        'command',
        'declare',
        'echo',
        'enable',
        'help',
        'let',
        'local',
        'logout',
        'mapfile',
        'printf',
        'read',
        'readarray',
        'source',
        'sudo',
        'type',
        'typeset',
        'ulimit',
        'unalias',
      ];
      const $GNU_CORE_UTILS = [
        'arch',
        'b2sum',
        'base32',
        'base64',
        'basename',
        'cat',
        'chcon',
        'chgrp',
        'chmod',
        'chown',
        'chroot',
        'cksum',
        'comm',
        'cp',
        'csplit',
        'cut',
        'date',
        'dd',
        'df',
        'dir',
        'dircolors',
        'dirname',
        'du',
        'echo',
        'env',
        'expand',
        'expr',
        'factor',
        'fmt',
        'fold',
        'groups',
        'head',
        'hostid',
        'id',
        'join',
        'link',
        'ln',
        'logname',
        'ls',
        'md5sum',
        'mkdir',
        'mkfifo',
        'mknod',
        'mktemp',
        'mv',
        'nice',
        'nl',
        'nohup',
        'nproc',
        'numfmt',
        'od',
        'paste',
        'pathchk',
        'pinky',
        'pr',
        'printenv',
        'printf',
        'ptx',
        'pwd',
        'readlink',
        'realpath',
        'rm',
        'rmdir',
        'runcon',
        'sed',
        'seq',
        'sha1sum',
        'sha224sum',
        'sha256sum',
        'sha384sum',
        'sha512sum',
        'shred',
        'shuf',
        'sleep',
        'sort',
        'split',
        'stat',
        'stdbuf',
        'stty',
        'sum',
        'sync',
        'tac',
        'tail',
        'tee',
        'test',
        'timeout',
        'touch',
        'tr',
        'truncate',
        'tsort',
        'tty',
        'uname',
        'unexpand',
        'uniq',
        'unlink',
        'uptime',
        'users',
        'vdir',
        'wc',
        'who',
        'whoami',
        'yes'
      ];

      return {
        name: 'rpm-spec',
        aliases: ['rpm', 'spec', 'rpm-spec', 'specfile'],
        keywords: {
          $pattern: /\b[a-z][a-z0-9._-]+\b/,
          keyword: $KEYWORDS,
          built_in: [
            ...$SHELL_BUILT_INS,
            ...$BASH_BUILT_INS,
            ...$GNU_CORE_UTILS,
          ]
        },
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
