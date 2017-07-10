/**
 * 基于 fetch 封装的 GET请求,请求出错,导致obserable不好用
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
const get = function (url, params, headers) {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                    //错误状态
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            //异常处理
            .catch((err) => {
                reject({status: -1});
            })
    })
};


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
const post = function (url, formData, headers) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return JSON.parse(response);
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
};

export {get, post}