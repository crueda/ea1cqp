'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL_WEB: '"https://web-demos.kyroslbs.com/view"',
})
