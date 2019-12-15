let newService = require("../service/news");
module.exports = {
  // async showIndex (ctx) {
  //   let showData = newService.getData();
  //   await ctx.render("news/index.pug", {
  //     showData
  //   })
  // }
  // 设置分页：
  async showIndex (ctx) {
    let p = 1
    if (typeof ctx.query.p !=='undefined') {
      p = parseInt(ctx.query.p) // 转换为数字
    }
    // console.log(p)
    // console.log(ctx.body)
    let newsData = newService.getData()
    let pageCount = Math.ceil(newsData.length / 5)
    let showData = newsData.slice((p -1)*5, p*5);
    await ctx.render('news/index.pug', {
      showData,
      pageCount
    })
  },
  // 查看详情页
  async showDetail (ctx) {
    let id = 1
    if (typeof ctx.query.id !== 'undefined') {
      id = ctx.query.id
      console.log(id, 'id')
    }
    let newsData = newService.getData()
    let dataItem = newsData[id-1] // 获取下标
    console.log(dataItem)
    await ctx.render("news/detail.pug", {
      dataItem
    })
  }
}