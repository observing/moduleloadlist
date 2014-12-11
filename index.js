'use strict';

var path = require('path');

/**
 * Return a list of loaded and required modules.
 *
 * @returns {Array}
 * @api public
 */
module.exports = function moduleLoadList() {
  var natives = process.moduleLoadList || []
    , cwd = process.cwd();

  return natives.concat(Object.keys(require.cache).map(function map(line) {
    var dependency = line.lastIndexOf('node_modules');

    line = line.split('.').shift();

    if (~dependency) {
      line = line.slice(dependency + 13);
    } else {
      line = path.relative(cwd, line);
      if (line.charAt(0) !== '.') line = './'+ line;
    }

    line = line.split('/').filter(Boolean);
    if (line[line.length - 1] === 'index') line.pop();
    if (!line.length) return;

    return 'UserModule '+ line.join('/');
  })).filter(Boolean);
};
