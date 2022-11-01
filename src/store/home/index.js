//home模块小仓库
import {reqCategoryList} from "@/api";
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//state:仓库存储数据的地方
const state = {
    categoryList:[],

};
//mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList;
    }
};
//action:处理action
const actions = {
    //通过API里的接口函数调用
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code===200) {
            commit("CATEGORYLIST", result.data);
        }
    }
};
//getters:理解为计算属性
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

