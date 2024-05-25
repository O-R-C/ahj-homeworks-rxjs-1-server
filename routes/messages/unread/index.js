const Router = require('@koa/router')
const router = new Router()

router.get('/messages/unread', async (ctx) => {
  ctx.body = JSON.stringify('messages unread')
})

module.exports = router
