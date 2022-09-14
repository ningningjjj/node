import path from 'path'
let mypath ='C:/Wevstorm/WebstormFile/node/path模块.js'

const lastname = path.basename(mypath)

const desuffixname = path.basename(mypath,'.js')//在提取出来的文件名结尾删除ext中的字符串，如果文件名结尾与ext中字符串不同，则不改变文件名

console.log("路径中完整的的文件名是："+lastname);
console.log('路径中文件的名字是：'+desuffixname)
console.log("尝试更改");
