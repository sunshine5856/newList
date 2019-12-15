const adminService = require('../service/admin')
module.exports = {
    async showIndex(ctx) {
        await ctx.render('admin/admin.pug')
    },
    async showAddNews(ctx) {
        await ctx.render('admin/addNews.pug')
    },
    async showNewsList(ctx) {
        await ctx.render('admin/newsList.pug')
    },
    async addNews(ctx) {
        // 接收post提交过来的数据
        // console.log(ctx.request.body);
        // console.log(ctx.request.files); // 上传的文件地址
        let res = await adminService.addNews(ctx.request);
       await ctx.render('admin/message.pug',{
                res,
                address:'/admin/addNewsTpl'
        });
    }
}