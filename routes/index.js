const combine = require('koa-combine-routers')

const index = require('./index/index')
const unread = require('./messages/unread')

const router = combine([index, unread])
module.exports = router
