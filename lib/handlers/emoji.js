/**
 * @author mizchi
 * @copyright 2016 Koutaro Chikuba
 * @license MIT
 * @module mdast:to-hast:handlers:emoji
 * @fileoverview Handle `emoji`.
 */

'use strict';

/* eslint-env commonjs */

/* Expose. */
module.exports = emoji;

/* Dependencies. */
var collapse = require('collapse-white-space');
var u = require('unist-builder');
var emosa = require('emosa');
const emojiMap = emosa.getMap();

/**
 * Transform inline code.
 *
 * @param {Function} h - Hyperscript DSL.
 * @param {Node} node - Node to compile.
 * @return {Node} - HAST node.
 */
function emoji(h, node) {
  return h(node, 'span', {className: "emoji"}, [
    u('text', emojiMap[node.emoji])
  ]);
}
