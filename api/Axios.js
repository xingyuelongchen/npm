import axios from 'axios';
import Config from './Config';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 请求进度条
NProgress.inc(0.2);
NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false
});
// 配置线上默认请求地址
if (process.env.NODE_ENV != 'development') {
    axios.defaults['baseURL'] = Config.baseUrl;
};

// 请求超时时间(毫秒)
axios.defaults['timeout'] = Config.axios.timeout || 60 * 10;
// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults['crossDomain'] = true;
axios.defaults['withCredentials'] = true;
// 当前用户使用语言
axios.defaults.headers.common['Accept-Language'] = 'zh-cn'

axios.interceptors.request.use(req, reqError);
axios.interceptors.response.use(res, resError);

function req(config) {
    NProgress.start();
    return config
}
function reqError() {
    NProgress.done();
    // 错误请求，请联系管理员
    return

}
function res(res) {
    NProgress.done();

    return res
}
function resError(error) {
    // 服务器出现错误，请联系管理员
    NProgress.done();
    return error
}
export default axios;
