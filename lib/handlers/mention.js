/**
 * @author mizchi
 * @copyright 2016 Koutaro Chikuba
 * @license MIT
 * @module mdast:to-hast:handlers:mention
 * @fileoverview Handle `mention`.
 */

'use strict';

/* eslint-env commonjs */

/* Expose. */
module.exports = mention;

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
function mention(h, node) {
  return h(node, 'a', {className: "mention", href: "/" + node.user}, [u('text', collapse(node.value))]);
}
