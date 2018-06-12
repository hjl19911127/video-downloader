//http://mooc.study.163.com/dwr/call/plaincall/CourseBean.getLessonUnitLearnVo.dwr?1528600086192
//http://mooc.study.163.com/dwr/call/plaincall/CourseBean.getLastLearnedMocTermDto.dwr?1528626841243
// callCount=1
// scriptSessionId=${scriptSessionId}190
// httpSessionId=412650a8969641448fc027479bd04c48
// c0-scriptName=CourseBean
// c0-methodName=getLastLearnedMocTermDto
// c0-id=0
// c0-param0=number:2001392029
// batchId=1528626827878
const readline = require('readline');
const fs = require('fs')
const requireFromString = require('require-from-string')
const request = require('request')
const mkdirp = require('mkdirp')
const requestWorker = require('./request')
let termId = 2001392029;
let httpSessionId = '4fc286b146c34167a571129c2559fa4a'
function writeLine(text) {
    readline.clearLine(process.stdout);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(text);
}
//contentType=1视频  contentType=3课件 
let options = {
    "gzip": true,
    "encoding": null,
    "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "text/plain",
        "DNT": 1,
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.7 Safari/537.36",
        "Cookie": 'usertrack=ezq0pVqtHA6esf5GUPqLAg==; TS01ca291d=012341c549dc5bfd5841528baabb518ba4235f1aba6fbc146721d6480364c63ab0a6be1198833290c36930c691a7e1a522784402c36388d7d7f678b41cea399e2a806792f8; _ntes_nnid=6beec0ca530256d94488ed10c0473d0f,1521294396761; _ntes_nuid=6beec0ca530256d94488ed10c0473d0f; __utma=187553192.2027475484.1525595917.1525595917.1525595917.1; __utmc=187553192; __utmz=187553192.1525595917.1.1.utmcsr=open.163.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __oc_uuid=de4f7e60-5108-11e8-b228-ab361d39455f; EDUWEBDEVICE=9d920ca60cf54eebb54a56ea60605d9f; __utmc=129633230; __f_=1525596026046; __e_=1525596159562; STUDY_MIND_TELBIND_CLOSE=1; videoResolutionType=3; hb_MA-BFF5-63705950A31C_source=www.baidu.com; __utmz=129633230.1528599819.23.8.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; NTESSTUDYSI=4fc286b146c34167a571129c2559fa4a; utm="eyJjIjoiIiwiY3QiOiIiLCJpIjoiIiwibSI6IiIsInMiOiIiLCJ0IjoiIn0=|aHR0cDovL3N0dWR5LjE2My5jb20vbWVtYmVyL2xvZ2luLmh0bT9yZXR1cm5Vcmw9YUhSMGNEb3ZMM04wZFdSNUxqRTJNeTVqYjIwdmJYay4="; NTES_SESS=ojbiixCtrJOuhicNT5UkkFzVeFCEjc_cRkxcYOEuNjQqbX4tbOxW2S.OyRGRE5_A_fu7yrYDm77coAgLJfgHfKbhGrabwRK_wpRmgM5WG27ltghuTMgp3JI66KoAAqIAeUPIw.418YYLOIeKvuhr1SwRafYyJirjEzaqUxerQZ.hzpJrrVhzS03LRXDNmdz5C1DNFbVTOJtyl5XuTxwooOfKL; NTES_PASSPORT=jUfUbDSXCxH.xYuF.EhD3xBAJlny7VwClWcVNjeWtesNMmy6MT5QSOHTtD9Dq_ihiyMgXwJwADtYStwnGndGgcxZkjhjVQF9R9udA3VnUOF5e2W4VmMxkYqgvHeqWSb9lLse7Gi6rN_BL51Bjg1VduPmXdh6ejMXANKcA2Lx6ciU7eP89HLUMJIhQ; S_INFO=1528818397|0|3&100##|hjl4347570; P_INFO=hjl4347570@163.com|1528818397|1|study|11&14|fuj&1528772131&study#fuj&350100#10#0#0|183659&0|study&blog|hjl4347570@163.com; STUDY_INFO="hjl4347570@163.com|-1|1029324064|1528818397858"; STUDY_SESS="HcBHVu4MLhZzw5GW5hhvyNHTOFzcoNVV6gPAPW8rI1knQQJZYkVrdACXJWPoeKc4eZkR3sb0GHAMfItZDHavaIhp35Pj/T2kE6I+0e6AmO3C9KL2nIO9FIkoXxLc1t38v6mZVZ7w/XPlCGvgto7iCSfRII5t5z6JUn8uqQgJ2A0vhQFx7kzH+3GA01euhE5D"; STUDY_PERSIST="4PJxiBH8H3n870h0EGWQcELyntZh9jo89yEqFBxE01yFQiEBpsE01C1CkGyHlTUwrTnpYuH5cooa3w5gdlcR5HhEZW2NtgqJHvMJ/ySLnK4YIDV+8X31mVLviy8C7bTaoOnLNMgjpUFUcgSUOAvasv9xkoWKK04L+VdummcF71Izx/ofz/dy8dplb8rNIXyQvj4nh0khWgVVlvbkvWAf/QiZDg3/uQPm3nciKqPLAn637Weq4j/S2qU01oFrl7Ms8WQLi3xTJ45sq/acjsEWiA=="; NETEASE_WDA_UID=1029324064#|#1504077606513; __utma=129633230.774576541.1525596023.1528772223.1528818421.29; NTES_STUDY_YUNXIN_ACCID=s-1029324064; NTES_STUDY_YUNXIN_TOKEN=adf3afc23d2b7a55b1e9d994bf32d276; sideBarPost=624; __utmb=129633230.7.9.1528818443664',
        "Host": "mooc.study.163.com",
        "Origin": "http://mooc.study.163.com",
        "Referer": "http://mooc.study.163.com/learn/2001281002?tid=2001392029"
    }
}
function formatPath(path) {
    return path.replace(/([\\\/\<\>:\?\*])/g, (text) => {
        return encodeURIComponent(text)
    })
}
async function download(url, path, filename) {
    return new Promise((resolve, reject) => {
        let progress = 0
        //Content-Length: 419283
        //Content-Disposition: attachment; filename="C1W1L02 notes.pdf"
        request(url).on('response', function (response) {
            let total = response.headers['content-length'];
            let contentDisposition = response.headers['content-disposition'];
            let match;
            if (contentDisposition) match = contentDisposition.match(/filename="(.+)"/)
            filename = filename || decodeURIComponent(decodeURIComponent(match[1]))
            if (total) {
                response.on('data', function (data) {
                    progress += data.length
                    writeLine(`下载  ${filename}  ${(progress / total * 100).toFixed(2)}%，共${total / 1024 > 1024 ? (total / 1024 / 1024).toFixed(2) + 'MB' : (total / 1024).toFixed(2) + 'KB'}`)
                })
            }
            response.pipe(fs.createWriteStream(path + filename)).on("finish", function () {
                console.log(`  完成`)
                resolve(filename);
            });
        })
    })
}
async function exec() {
    let res, distPath = 'dist';

    //所有课件
    options.url = 'http://mooc.study.163.com/dwr/call/plaincall/CourseBean.getLessonUnitLearnVo.dwr?1528600086192'
    options.body = Object.entries({
        'callCount': 1,
        'scriptSessionId': '${scriptSessionId}190',
        'httpSessionId': httpSessionId,
        'c0-scriptName': 'CourseBean',
        'c0-methodName': 'getLastLearnedMocTermDto',
        'c0-id': 0,
        'c0-param0': `number:${termId}`,
        'batchId': +new Date()
    }).map(([key, value]) => {
        return `${key}=${value}`
    }).join('\n')
    options.method = 'POST'
    res = await requestWorker(options)
    res = res.replace(/dwr\.engine\._remoteHandleCallback\(/gi, 'module.exports=dwr.engine._remoteHandleCallback(')
    let { chapters } = requireFromString('var dwr={engine:{_remoteHandleCallback:function(time,type,{mocTermDto}){return mocTermDto;}}};' + res)
    for (let chapterIndex = 0; chapterIndex < chapters.length; chapterIndex++) {
        let { name: chapterName, lessons } = chapters[chapterIndex]
        let pathToChapter = distPath + '/' + formatPath(chapterName)
        for (let lessonIndex = 0; lessonIndex < lessons.length; lessonIndex++) {
            let { name: lessonName, units } = lessons[lessonIndex]
            let pathToLesson = pathToChapter + '/' + formatPath(lessonName)
            for (let unitIndex = 0; unitIndex < units.length; unitIndex++) {
                let { name: unitName, contentId, contentType, id } = units[unitIndex];
                unitName = formatPath(unitName)
                //单个课件
                options.url = 'http://mooc.study.163.com/dwr/call/plaincall/CourseBean.getLessonUnitLearnVo.dwr?1528600086192'
                options.body = Object.entries({
                    'callCount': 1,
                    'scriptSessionId': '${scriptSessionId}190',
                    'httpSessionId': httpSessionId,
                    'c0-scriptName': 'CourseBean',
                    'c0-methodName': 'getLessonUnitLearnVo',
                    'c0-id': 0,
                    'c0-param0': `number:${termId}`,//termId
                    'c0-param1': `number:${contentId}`,//contentId
                    'c0-param2': `number:${contentType}`, //contentType
                    'c0-param3': 'number:0',
                    'c0-param4': `number:${id}`, //id
                    'batchId': +new Date()
                }).map(([key, value]) => {
                    return `${key}=${value}`
                }).join('\n')
                options.method = 'POST'
                res = await requestWorker(options)
                if (contentType == 1) {
                    let suffix;
                    res = res.replace(/dwr\.engine\._remoteHandleCallback\(/gi, 'module.exports=dwr.engine._remoteHandleCallback(')
                    let resource = requireFromString('var dwr={engine:{_remoteHandleCallback:function(time,type,{videoVo}){return videoVo;}}};' + res);
                    //videoUrl
                    let videoUrl = resource.mp4ShdUrl || resource.mp4HdUrl || resource.mp4SdUrl;
                    if (videoUrl) suffix = 'mp4';
                    else {
                        videoUrl = resource.flvShdUrl || resource.flvHdUrl || resource.flvSdUrl
                        if (videoUrl) suffix = 'flv';
                    }
                    if (videoUrl) {
                        mkdirp.sync(pathToLesson)
                        await download(videoUrl, pathToLesson + '/', `${unitName}.${suffix}`)
                    }
                    //有字幕
                    let srtUrls = resource.mp4Caption || resource.flvCaption
                    if (srtUrls) {
                        let chineseSrt = srtUrls.find((v) => {
                            return v.name === '中文'
                        })
                        mkdirp.sync(pathToLesson)
                        await download(chineseSrt, pathToLesson + '/', `${unitName}.srt`)
                    }
                } else {
                    //课件
                    res = res.replace(/dwr\.engine\._remoteHandleCallback\(/gi, 'module.exports=dwr.engine._remoteHandleCallback(')
                    let resource = requireFromString('var dwr={engine:{_remoteHandleCallback:function(time,type,{pdfUrl,textOrigUrl}){return {pdfUrl,textOrigUrl};}}};' + res);
                    let pdfUrl = resource.pdfUrl || resource.textOrigUrl
                    if (pdfUrl) {
                        mkdirp.sync(pathToLesson)
                        await download(pdfUrl, pathToLesson + '/')
                    }
                }
            }
        }
    }
}
exec()