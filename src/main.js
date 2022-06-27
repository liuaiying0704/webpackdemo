// // 轮播图逻辑
// console.log('实现轮播图的业务逻辑');
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑');
// 引入tabs.js,,banner.js
import './banner.js';
import './tabs.js';
import './styles/index.css';
import './styles/index.less';
// index.js
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);
import imgUrl1 from './assets/logo_small.png';

let img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);
