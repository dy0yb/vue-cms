import Vue from 'vue'
// 导入路由包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter);


import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'


// 导入自己的router.js 路由模板
import router from './router.js'

import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c=> c(app),
    router: router,  // 挂载路由对象到vm实例上
});