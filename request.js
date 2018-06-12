const fs = require('fs')
const request = require('request')
const iconv = require('iconv-lite');
let requestWorker = (options) => {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            let result = body;
            let contentTypes = response.headers['content-type'].split(';')
            let charset = contentTypes[1] && contentTypes[1].split('=')[1]
            if (charset) result = iconv.decode(body, charset)
            if (!error && response.statusCode == 200) {
                resolve(result)
            } else {
                reject({ statusCode: response && response.statusCode, body: error || result })
            }
        })
        // .pipe(fs.createWriteStream('ml.js'))
    })
}
module.exports = requestWorker
