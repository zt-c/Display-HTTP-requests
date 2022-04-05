const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

let allRequests = ''

app.use(async (ctx, next) => {
  if (ctx.request.path === '/showRequest') {
    ctx.response.body = allRequests;
  } else {
    newRequest = 'Headers = ' + JSON.stringify(ctx.request, null, 4) + '\n'
    newRequest += 'Body = ' + JSON.stringify(ctx.request.body, null, 4) + '\n'
    newRequest += '-------------------------------------------------------------------\n'
    allRequests += newRequest
    ctx.response.body = 'Received request\n\n' + newRequest;
  }
});

app.listen(3000);
