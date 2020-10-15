
export const isUA = function () {
    let isUA = "web";
    let userAgent = navigator.userAgent.toLowerCase();
    if (/micromessenger/.test(userAgent)) isUA = "wechat";
    else if (/alipayclient/.test(userAgent)) isUA = "alipay";
    else if (/iphone/.test(userAgent)) isUA = "h5";
    else if (/android/.test(userAgent)) isUA = "h5";
    return isUA
};
export default isUA