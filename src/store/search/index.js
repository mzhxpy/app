//search模块的小仓库
import { reqSearchList } from '@/api'
let state = {
    //搜索模块返回的数据
    searchList: {}
};
let mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
let actions = {
    async getSearchList({ state, dispatch, commit }, searchParams) {
        let result = await reqSearchList(searchParams);
        if (result.code === 200) {
            commit('GETSEARCHLIST', result.data);
        }
    }
};

//getters:仓库的计算属性
//项目中:vuex的getters,为了简化数据而生。
let getters = {
    //计算新的属性:state,当前小仓库的数据
    goodsList(state) {
        return state.searchList.goodsList;
    },
    //品牌的数据
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    //商品属性
    attrsList(state) {
        return state.searchList.attrsList;
    }
};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}






/*
//search小仓库
/!*import Vuex from "vuex";
import Vue from "vue";*!/
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



*/
