import replace from 'rollup-plugin-replace'
import buble from 'rollup-plugin-buble'
const pkg = require('./package.json')

const ie8_support = process.argv.indexOf('--ie8') > 0
const mobile_first = process.argv.indexOf('--desktop') < 0
const version = pkg.version

export default {
  entry: 'src/breaks2000.js',
  plugins: [
    replace({
      __VERSION__: version,
      __IE8_SUPPORT__: ie8_support ? 'true' : 'false',
      __MOBILE_FIRST__: mobile_first ? 'true' : 'false'
    }),
    buble()
  ],
  moduleName: 'breaks2000',
  targets: [
    { dest: 'dist/index.js', format: 'cjs' },
    { dest: 'dist/breaks2000.js', format: 'iife' },
    { dest: 'dist/module.js', format: 'es' },
  ],
  banner: '/*! breaks2000 ' + version + ' */'
}