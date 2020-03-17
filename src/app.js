const Koa = require('koa'),
      Router = require('koa-router')
      auth = require('./server/routes/auth')
      cros = require('./middleware/cros')

const app = new Koa();
const router = new Router();
app
  .use(require('koa-json')())
  .use(require('koa-logger')())
  .use(require('koa-bodyparser')());


//跨域设置
// app.use(cros({
//   allowOrigin:['http://localhost:8080/', 'http://192.168.10.141:8080','http://localhost:8089/', 'http://192.168.10.141:8089'],
//   allowMethods:[],
//   allowHeaders:[]
// }))
// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', ctx.environ['HTTP_ORIGIN']);
//   await next();
//  });

router
  .use('/auth', auth.routes());


app.use(router.routes(), router.allowedMethods())

// app.use(async(next)=> {
//   let start = new Date;
//   await next;
//   let ms = new Date - start;
//   console.log('%s %s - %s', this.method, this.url, ms); // 显示执行的时间
  
// });

app.listen('8089', ()=> {
  console.log('Koa is listening in 8089');
  
});

module.exports = app;