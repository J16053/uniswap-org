/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import { wrapRootElement as wrap } from "./wrap-root-element"

// export const wrapRootElement = wrap
require('prismjs/themes/prism.css')
// require('prismjs/themes/prism-solarizedlight.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')
exports.shouldUpdateScroll = () => {
  return false
}
