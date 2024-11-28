'use strict';

const init = require('eslint-config-metarhia');

init[0].ignores.push('**/*.mjs');
init[0].rules['class-methods-use-this'] = 'off';

module.exports = init;
