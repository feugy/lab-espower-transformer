const Lab = require('lab')
const assert = require('power-assert')
const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it

describe('Lab Espower Transformer', () => {

  // given a lab instance with failing tests
  const tested = Lab.script({schedule: false})

  tested.describe('failing test cases', () => {
    tested.it('inequality', finished => {
      const obj = {
        prop1: {
          prop2: false
        }
      }
      assert(obj.prop1.prop2)
      finished()
    })
  })

  it('should give contextualized reports when test are failing', done => {
    // when running the test with lab
    Lab.report(tested, {
      verbose: true,
      leaks: false,
      reporter: 'json',
      output: null
    }, (err, code, output) => {
      assert.ok(!err)
      const report = JSON.parse(output)
      assert.equal(report.tests['failing test cases'].length, 1)

      const details = report.tests['failing test cases'][0]
      // classical error report would only contains true !== false
      assert.ok(details.err.indexOf('Object{"prop2":false}') >= 0)
      assert.ok(details.err.indexOf(assert('obj.prop1.prop2') >= 0))
      done()
    })
  })
})
