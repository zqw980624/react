const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors')
const router = require('./routers/index')
const static = require('koa-static')
const {join} =require('path')
const app = new Koa();
app.use(static(join(__dirname,"public")))


app.use(cors())
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3001, () => {
    console.log(12222)
})
