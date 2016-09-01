/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module mdast:to-hast:handlers
 * @fileoverview Handle each node.
 */

'use strict';

/* eslint-env commonjs */

/* Handlers. */
module.exports = {
  blockquote: require('./blockquote'),
  break: require('./break'),
  code: require('./code'),
  delete: require('./delete'),
  emphasis: require('./emphasis'),
  footnoteReference: require('./footnote-reference'),
  footnote: require('./footnote'),
  heading: require('./heading'),
  html: require('./html'),
  imageReference: require('./image-reference'),
  image: require('./image'),
  inlineCode: require('./inline-code'),
  math: require('./math'),
  mention: require('./mention'),
  linkReference: require('./link-reference'),
  link: require('./link'),
  listItem: require('./list-item'),
  list: require('./list'),
  paragraph: require('./paragraph'),
  root: require('./root'),
  strong: require('./strong'),
  table: require('./table'),
  text: require('./text'),
  thematicBreak: require('./thematic-break'),
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};

/**
 * Return nothing for nodes which are ignored.
 *
 * @return {null} - Nothing.
 */
function ignore() {
  return null;
}
