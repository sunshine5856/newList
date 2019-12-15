let newData = require('../data/data.json')
const fs = require('fs')
module.exports= {
    addNews(request){
        console.log(request)
        let { title,type,country,content } = request.body;
        let dateObj = new Date()
        let addData = {
            id: newData[newData.length-1].id + 1, //不能重复
            title,
            type,
            country,
            content,
            addTime: dateObj.getFullYear() + '-' + (dateObj.getMonth()+1) + '-' + dateObj.getDate() //服务器的时间
        }
        if(typeof request.files !== 'undefined') {
            let tempPath = request.files.img.path
            let imgName = request.files.img.name
           fs.writeFileSync('static/img/' + imgName, fs.readFileSync(tempPath))
           addData.imgUrl = '/img/' + imgName
        }
        newData.push(addData)
        return new Promise(resolve =>{//ait必须是用resolve接收
            // 需要把对象转为json格式
            fs.writeFile('data/data.json', JSON.stringify(newData),err =>{
                if(err){
                    console.log('写入失败')
                    resolve({
                        info:'写入失败',
                        code: 1
                    })
                } else {
                    console.log('写入成功')
                    resolve({
                        info: '写入成功',
                        code: 0
                    })
                }
            })
        })
       

    }
}