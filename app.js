const Koa = require("koa");
const views = require("koa-views");
const static = require("koa-static");
const koaBody = require("koa-body");
let router = require("./router");

let app = new Koa();
app.use(koaBody({
    multipart:true  //允许上传文件
}))
app.use(views(__dirname+"/views"),{
    map:{
        html:"pug"
    }
})
app.use(static(__dirname+"/static/"));
router(app);

app.listen(3001);