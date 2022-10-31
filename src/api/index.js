//当前这个模块：api进行统一管理
import requests from "@/api/request";

//三级联动接口
///api/product/getBaseCategoryList GET 无参数

export const reqCategoryList = () => {
    return  requests({url:'/product/getBaseCategoryList', method:'get'})
}


