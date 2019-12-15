const Router = require('koa-router')
const newsController = require('../controller/news')
let newsRouter = new Router({
    prefix: '/news' //前缀
})

newsRouter.get('/index', newsController.showIndex)
newsRouter.get('/detail', newsController.showDetail)
module.exports  = newsRouter