/*
webpack入口起点文件
1,开发环境:webpack ./src/index.js -o ./build/build.js --mode=development
    webpack会将入口文件打包输出到build文件夹,整体的打包环境是开发环境
2,生产环境:webpack ./src/index.js -o ./build/build.js --mode=production

    webpack会将入口文件打包输出到build文件夹,整体的打包环境是生产环境   
结论:
1.webpack只能处理js/json资源,不能处理css/img等其他资源
2.生产环境比开发环境多了一个压缩js代码

*/
import data from './data.json'
import './index.css'
console.log(data);
let add = (x, y) => {
    return x + y
}
console.log(add(2, 3));