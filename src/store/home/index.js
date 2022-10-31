//home模块小仓库
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//state:仓库存储数据的地方
const state = {};
//mutations:修改state的唯一手段
const mutations = {};
//action:处理action
const actions = {};
//getters:理解为计算属性
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

