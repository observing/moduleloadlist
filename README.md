# moduleLoadList

[![Version npm][version]](http://browsenpm.org/package/moduleloadlist)[![Build Status][build]](https://travis-ci.org/observing/moduleloadlist)[![Dependencies][david]](https://david-dm.org/observing/moduleloadlist)[![Coverage Status][cover]](https://coveralls.io/r/observing/moduleloadlist?branch=master)

[version]: http://img.shields.io/npm/v/moduleloadlist.svg?style=flat-square
[build]: http://img.shields.io/travis/observing/moduleloadlist/master.svg?style=flat-square
[david]: https://img.shields.io/david/observing/moduleloadlist.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/observing/moduleloadlist/master.svg?style=flat-square

Return a list of modules, bindings and native modules that have currently been
loaded in your application. This gives you a greater understanding of the
complexity of your application and possibly some useful information for
debugging.

## Installation

The module is released in npm and can therefor be installed by running:

```
npm install --save moduleloadlist
```

## Usage

This module exposes one single function in the exports so you can require the
module as illustrated in the example below:

```js
'use strict';

var moduleLoadList = require('moduleloadlist');
```

To get a list of modules loaded you simply have to call the returned function:

```js
console.log(moduleLoadList());
```

It would output something like: 

```
[ 'Binding evals',
  'Binding natives',
  'NativeModule events',
  'NativeModule buffer',
  'Binding buffer',
  'NativeModule assert',
  'NativeModule util',
  'NativeModule path',
  'NativeModule module',
  'NativeModule fs',
  'Binding fs',
  'Binding constants',
  'NativeModule stream',
  'NativeModule _stream_readable',
  'NativeModule _stream_writable',
  'NativeModule _stream_duplex',
  'NativeModule _stream_transform',
  'NativeModule _stream_passthrough',
  'NativeModule child_process',
  'NativeModule string_decoder',
  'NativeModule net',
  'NativeModule timers',
  'Binding timer_wrap',
  'NativeModule _linklist',
  'Binding cares_wrap',
  'NativeModule dgram',
  'Binding udp_wrap',
  'Binding process_wrap',
  'NativeModule constants',
  'NativeModule tty',
  'Binding tty_wrap',
  'Binding signal_wrap',
  'NativeModule console',
  'UserModule mocha/bin/_mocha',
  'UserModule commander',
  'UserModule glob/glob',
  'UserModule graceful-fs/graceful-fs',
  'UserModule graceful-fs/polyfills',
  'UserModule minimatch/minimatch',
  'UserModule lru-cache/lib/lru-cache',
  'UserModule sigmund/sigmund',
  'UserModule inherits/inherits',
  'UserModule mocha',
  'UserModule mocha/lib/mocha',
  'UserModule mocha/lib/utils',
  'UserModule debug/node',
  'UserModule debug/debug',
  'UserModule ms',
  'UserModule mocha/lib/interfaces',
  'UserModule mocha/lib/interfaces/bdd',
  'UserModule mocha/lib/suite',
  'UserModule mocha/lib/ms',
  'UserModule mocha/lib/hook',
  'UserModule mocha/lib/runnable',
  'UserModule mocha/lib/test',
  'UserModule mocha/lib/interfaces/tdd',
  'UserModule mocha/lib/interfaces/qunit',
  'UserModule mocha/lib/interfaces/exports',
  'UserModule mocha/lib/reporters',
  'UserModule mocha/lib/reporters/base',
  'UserModule diff/diff',
  'UserModule mocha/lib/reporters/dot',
  'UserModule mocha/lib/reporters/doc',
  'UserModule mocha/lib/reporters/tap',
  'UserModule mocha/lib/reporters/json',
  'UserModule mocha/lib/reporters/html',
  'UserModule mocha/lib/browser/progress',
  'UserModule mocha/lib/reporters/list',
  'UserModule mocha/lib/reporters/min',
  'UserModule mocha/lib/reporters/spec',
  'UserModule mocha/lib/reporters/nyan',
  'UserModule mocha/lib/reporters/xunit',
  'UserModule mocha/lib/reporters/markdown',
  'UserModule mocha/lib/reporters/progress',
  'UserModule mocha/lib/reporters/landing',
  'UserModule mocha/lib/reporters/json-cov',
  'UserModule mocha/lib/reporters/html-cov',
  'UserModule mocha/lib/reporters/json-stream',
  'UserModule mocha/lib/context',
  'UserModule mocha/lib/runner',
  'UserModule ./test',
  'UserModule assume',
  'UserModule backtrace',
  'UserModule stacktrace-js/stacktrace',
  'UserModule assume/failure',
  'UserModule pathval',
  'UserModule deep-eql',
  'UserModule deep-eql/lib/eql',
  'UserModule type-detect',
  'UserModule type-detect/lib/type',
  'UserModule .' ]
```

## License

MIT
