import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const Store = new Vuex.Store({
    state: {
      protocol:"http",// 文件传输协议
      server:"/pkg", // 服务器发布地址
      imgDir:"/pkg/data/img/" // 图片资源地址
    },
    mutations: {

    }
})