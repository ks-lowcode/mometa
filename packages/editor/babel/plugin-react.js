const __MOMETA_LOCAL__ = !!process.env.__MOMETA_LOCAL__
const path = require('path')
if (__MOMETA_LOCAL__) {
  module.exports = require(path.resolve(__dirname, '../src/babel/react'))
} else {
  module.exports = require(path.resolve(__dirname,'../lib/babel/react'))
}
