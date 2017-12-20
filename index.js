const espower = require('espower')
const acorn = require('acorn')
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
    let ast
    const comments = []
    const tokens = []
    try {
      ast = acorn.parse(content, {
        ecmaVersion: 8,
        ranges: true,
        locations: true,
        sourceFile: true,
        onComment: comments,
        onToken: tokens
      })
    } catch (err) {
      // remove stack for simpler errors
      delete err.stack
      throw err
    }
    // attach comments using collected information
    escodegen.attachComments(ast, comments, tokens)
    // generate code
    return escodegen.generate(espower(ast))
  }
}]
