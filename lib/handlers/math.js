/**
 * @author mizchi
 * @copyright 2016 Koutaro Chikuba
 * @license MIT
 * @module mdast:to-hast:handlers:math
 * @fileoverview Handle `math`.
 */

'use strict';

/* eslint-env commonjs */

/* Expose. */
module.exports = math;

/* Dependencies. */
var collapse = require('collapse-white-space');
var u = require('unist-builder');

/**
 * Transform inline code.
 *
 * @param {Function} h - Hyperscript DSL.
 * @param {Node} node - Node to compile.
 * @return {Node} - HAST node.
 */
function math(h, node) {
  return h(node, 'code', {className: ["math"]}, [u('text', collapse(node.value))]);
}
