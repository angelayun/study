const Koa = require('koa');
const app = new Koa()

/* app.use((ctx, next) => {
    ctx.body = [
        {
            name: 'lyh-test'
        }
    ]
    next()
})
const router = {}
router['/favicon.ico'] = ctx => { }
router['/html'] = ctx => {
    ctx.type = 'text/html;charset=utf-8'
    ctx.body = ctx.body[0].name
}
app.use((ctx, next) => {
    console.log('url' + ctx.url)
    router[ctx.url](ctx)
}) */

/* app.use(async (ctx,next) => {
    const start = new Date().getTime()
    console.log(`start: ${ctx.url}`);
    await next();
    const end = new Date().getTime()
    console.log(`请求${ctx.url}, 耗时${parseInt(end-start)}ms`)
})
app.use(require('koa-static')(__dirname+'/')) */


const router = require('koa-router')()
router.get('/string', async (ctx, next) => {
    ctx.body = 'this is just string test'
})
// app.use(router)
app.listen(3000);