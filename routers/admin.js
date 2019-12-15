const adminController = require('../controller/admin')
const Router = require('koa-router')
let adminRouter = new Router({
    prefix:'/admin' //前缀
});

adminRouter.get('/index', adminController.showIndex)
adminRouter.get('/addNewsTpl', adminController.showAddNews)
adminRouter.get('/newsListTpl',adminController.showNewsList)
adminRouter.post('/addNews', adminController.addNews)
module.exports = adminRouter;