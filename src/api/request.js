//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";

//1:利用axios对象的方法create,去创建一个axios实例
//2:request就是axios,只不过需要配置
const requests = axios.create({
    //配置对象
    //基础路径
    baseURL: "/api",
    //请求超时5s
    timeout: 5000,

});

requests.interceptors.request.use((config) => {
    //config:配置对象
    nprogress.start();

    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数
    nprogress.done();
    return res.data;
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new error('faile'));
});


//对外暴露
export default requests;


