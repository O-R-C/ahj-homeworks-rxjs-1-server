const Router = require('@koa/router')
const router = new Router()
const messages = require('../../../db/messages')

router.get('/messages/unread', async (ctx) => {
  ctx.status = 200

  ctx.type = 'application/json'

  ctx.body = JSON.stringify({
    status: 'ok',
    timestamp: Date.now(),
    messages: messages.get(),
  })
})

module.exports = router
