/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {history} from "@@/core/history";
import {stringify} from "querystring";
import {message} from "antd";

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.NODE_ENV === 'development' ? '/api' : 'http://39.106.248.36:8080/api'
  // requestType: 'form',
});

/**
 * 所以请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  // 这里之前踩坑了，如果不加前缀的话，app.tsx文件里的前缀不会自动加上，所以回请求不到后段，没有返回
  // eslint-disable-next-line no-param-reassign
  //url = '/api'+url;
  console.log(`do request url: ${url}`)
  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response): Promise<any> => {
  const res = await response.clone().json()
  if(res.code === 0){
    return res.data
  }

  if(res.code === 40100){
    message.error('请先登录')
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname
      }),
    });
  }else{
    message.error(res.description)
  }
  return res.data;
});

export default request;
