//配置路由
import Vue from 'vue';
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";



//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace();

//重写push | replace
//第一个参数：告诉原来push方法，你往哪里跳转(传递哪些参数)
//第二个参数：undefined|箭头函数（成功的回调）
//第三个参数:undefined|箭头函数（失败的回调）
VueRouter.prototype.push = function (location, resolve, reject){
    if (resolve && reject) {
        originPush.call(this, location, resolve,reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject){
    if (resolve && reject) {
        originReplace.call(this, location, resolve,reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

//配置路由
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true},
        },
        {
            path:"/search/:keyword?",//?指定query、params 参数可传可不传
            component:Search,
            meta:{show:true},
            name:"search",
            //路由组件传递props数据
            //布尔值写法
            //props:true,
            //对象写法:额外的给路路由组件传递一些props
            //props:{a:1,b:2},
            //函数写法
            /*props:($route) => {
                return {keyword:$route.params.keyword,k:$route.query.k};
            }*/
            props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false},
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false},
        },
        //重定向
        {
            path:'*',
            redirect:"/home"
        }
    ]
})
