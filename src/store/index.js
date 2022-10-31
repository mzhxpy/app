import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//引入小仓库
import home from "./home";
import search from "./search";

/*//state:仓库存储数据的地方
const state = {};
//mutations:修改state的唯一手段
const mutations = {};
//action:处理action
const actions = {};
//getters:理解为计算属性
const getters = {};*/


export default new Vuex.Store({
    //实现Vuex仓库模块试开发存储数据
    modules: {
        home,
        search,
    },

    /*state,
    mutations,
    actions,
    getters,*/
});


