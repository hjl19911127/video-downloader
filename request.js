const request = require('request')
const iconv = require('iconv-lite');
let requestWorker = (options) => {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let contentTypes = response.headers['content-type'].split(';')
                let charset = contentTypes[1].split('=')[1]
                var result = iconv.decode(body, charset)
                resolve(result)
            } else {
                reject({ statusCode: response && response.statusCode, body: error || JSON.parse(body) })
            }
        })
    })
}
module.exports = requestWorker
