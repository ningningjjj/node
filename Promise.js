import fs from 'fs'

const pro = new Promise(function (resolve, reject){
    fs.readFile('./1.md',function (err, data){
        if(err)reject(err)
        resolve(data);
    })
});
pro.then(function (value){
    return new Promise(function (resolve, reject){
        fs.readFile('./2.md',function (err, data){
            resolve([value,data]);
        })
    })
},function (reason){
    console.error('读取文件1.md失败')
})
.then(function (value){

    return new Promise(function (resolve, reject){
        fs.readFile('./3.md',function (err, data){

            resolve([...value,data])
        })
    })
},function (reason){
    console.error("文件2.md读取出错")
})
.then(function (value){
    console.log(value.join('\n'))
})

