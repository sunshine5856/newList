let newsRouter = require("./routers/news");
let adminRouter = require("./routers/admin");
module.exports = (app)=>{
    app.use(newsRouter.routes())
    app.use(adminRouter.routes())
}