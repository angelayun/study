// import './index.css'
import './index.less'
import logo from './view_webpack_version.png';

import axios from 'axios';
// 此外的logo其实就是生成到的dist目录下对应的ff75ec1d4250c81ce1d6dcb1e7b9b703。png文件
console.log(logo);
// document.write('hello webpack!为了测试字体特意写几个中文看看--英雄难过美人关，我不是英雄，美人让我过了关。');

var img = new Image();
img.src = logo;
img.classList.add("logo"); 

var root = document.getElementById("root");
root.append(img);
console.log('故意写错看下')


axios.get('/api/info').then((res)=>{
    console.log(res);
})


