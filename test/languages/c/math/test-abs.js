// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var abs = require('../../../../src/c/math/abs.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/c/math/abs.js (tested in test/languages/c/math/test-abs.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 4.2
    var result = abs(4.2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 4.2
    var result = abs(-4.2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 5
    var result = abs(-5)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 0
    var result = abs('_argos')
    expect(result).to.deep.equal(expected)
    done()
  })
})