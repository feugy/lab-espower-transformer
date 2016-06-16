const espower = require('espower')
const esprima = require('esprima')
const escodegen = require('escodegen')

module.exports = [{
  ext: '.js',

  /**
   * Enhance current file content with espower assertions
   * @param {String} content - parsed file content
   * @param {String} filename - relative file path
   * @returns {String} content - enhanced Javascript content
   */
  transform: (content, filename) => {
    if (filename.indexOf('node_modules') !== -1 || content.indexOf('power-assert') === -1) return content
    return escodegen.generate(
      espower(
        esprima.parse(
          content,
          {tolerant: true, loc: true, tokens: true}
        ), {path: filename}
      )
    )
  }
}]
