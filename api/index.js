

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
    install(VM) {
        Object.keys(obj).forEach(e => {
            VM.prototype[e.toLocaleLowerCase()] = obj[e]
        })
    }
};

