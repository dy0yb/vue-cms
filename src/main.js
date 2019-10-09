import Vue from 'vue'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'


import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c=> c(app)
});