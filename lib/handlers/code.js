/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module mdast:to-hast:handlers:code
 * @fileoverview Handle `code`.
 */

'use strict';

/* eslint-env commonjs */

/* Expose. */
module.exports = code;

/* Dependencies. */
var detab = require('detab');
var u = require('unist-builder');
var lowlight = require('lowlight');

/**
 * Transform a code block.
 *
 * @param {Function} h - Hyperscript DSL.
 * @param {Node} node - Node to compile.
 * @return {Node} - HAST node.
 */
function code(h, node) {
  var value = node.value ? detab(node.value + '\n') : '';
  var meta = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  var props = {};
  var lang, filename;
  node.xxx = 1;

  if (meta) {
    var m = meta[0].split(":");
    lang = m[0];
    filename = m[1];
    node.lang = lang;
    node.filename = filename;
    props.className = ['language-' + lang];
  }

  return h(node.position, "code", {className: ['code-frame']}, [
    filename
      ? h(node, 'div', {className: ['code-lang']}, [
        u('text', filename)
      ])
      : u('text', '')
    ,
    h(node, 'pre', {className: ['highlight']},[
      h(node, 'code', props,
        lang && lowlight.getLanguage(lang)
          ? lowlight.highlight(lang, node.value).value
          : [u('text', value)]
      )
    ])
  ]);
}
