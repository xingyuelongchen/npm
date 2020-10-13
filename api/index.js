

// const files = require.context('./', true, /[A-Z][\w\d]+\.js$/);
// const MODULES = {};
// files.keys().forEach(key => {
//     const filename = key.replace(/(\.\/|\.js)/g, '');
//     MODULES[filename] = files(key)['default']
// });
export const Axios = require('./Axios').default;
export const Storage = require('./Storage').default;
export const FormatDate = require('./FormatDate').default;
export const Config = require('./Config');
export const Validate = require('./Validate');
const obj = { Axios, Config, Storage, ...Storage, Validate, FormatDate };

export default {
    ...obj,
    install(VM, options = {}) {
        options = { ...obj, ...options }
        var version = Number(VM.version.split('.')[0])
        if (version == 3) {
            // vue ^3.0  版本扩展方法
            VM.config.globalProperties = options;
        } else {
            // vue 2.0+  版本扩展方法  
            Object.keys(options).forEach(e => {
                VM.prototype[e.toLocaleLowerCase()] = options[e]
            })
        }
    }
};
/**
 * 缓存tab选项卡
 */
// function cache() {
//     window.onbeforeunload = () => {
//         try {
//             delete Store.state.nocach;
//             sessionStorage.setItem("Store", JSON.stringify(Store.state));

//         } catch (error) {
//             console.log(error);
//             return false

//         }
//     };
//     window.addEventListener("load", () => {
//         let data = sessionStorage.getItem("Store") || false;
//         if (data) Store.commit("setInit", JSON.parse(data));
//         sessionStorage.removeItem("Store");
//     });
// }

