//http://mooc.study.163.com/dwr/call/plaincall/CourseBean.getLessonUnitLearnVo.dwr?1528600086192


const fs = require('fs')
const request = require('./request')

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
        "Cookie": 'usertrack=ezq0pVqtHA6esf5GUPqLAg==; TS01ca291d=012341c549dc5bfd5841528baabb518ba4235f1aba6fbc146721d6480364c63ab0a6be1198833290c36930c691a7e1a522784402c36388d7d7f678b41cea399e2a806792f8; _ntes_nnid=6beec0ca530256d94488ed10c0473d0f,1521294396761; _ntes_nuid=6beec0ca530256d94488ed10c0473d0f; __utma=187553192.2027475484.1525595917.1525595917.1525595917.1; __utmc=187553192; __utmz=187553192.1525595917.1.1.utmcsr=open.163.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __oc_uuid=de4f7e60-5108-11e8-b228-ab361d39455f; EDUWEBDEVICE=9d920ca60cf54eebb54a56ea60605d9f; __utmc=129633230; __f_=1525596026046; __e_=1525596159562; STUDY_MIND_TELBIND_CLOSE=1; NTESSTUDYSI=bbc1412c16ee42d988260ccb69a87020; NTES_SESS=H3mQkBsTgbLzXekp4RL9iUbQIgxJ9kS6C03KVDNglyTcUGQvUZBPoCcZ08h8swn5ngT.0ApN9..FH5Y6KgYJgMU_hAlUf8Mnf6685k5s.sIMGGiJAEvJieZHFTyags6GeIN1HRYjeYcudjty2SfEr04HILZN3RFRDnlh_NDdGSli3eYHr7n.rvwD.eCOdhYy6HY37coUq_AmR9VlAhO_GF3M6; NTES_PASSPORT=OaLSvcvm6CAiUDDbgOMBHP2l.zTxHvI04DMzdIFZqWr.a7s5atXR4yPtxz.zVmFpFsa_gGSGjzxn4xG9Y96Y_2zzUgnBEOt05s9nRy.G_az9.ya_.7WREavWAbFMJ.YfFP0lKLDwAUkir7OC.9D6iBfykZ89Xa11ILZGzVyaHlbjn; S_INFO=1528597522|0|3&100##|hjl4347570; P_INFO=hjl4347570@163.com|1528597522|1|study|11&14|fuj&1527580426&study#fuj&350600#10#0#0|183659&0|search&study&blog|hjl4347570@163.com; STUDY_INFO="hjl4347570@163.com|-1|1029324064|1528597524450"; STUDY_SESS="HcBHVu4MLhZzw5GW5hhvyNHTOFzcoNVV6gPAPW8rI1knQQJZYkVrdACXJWPoeKc48DK3lY/JCqeCF1f0ZsGa73/42yCKr/nOGoFpBNHoshD+w4Li7tkF9uB2Wete8Pm2N2+m+26L9Wnno46iZf7iRLkAGq9NwKVoOsxU0pFLu+YvhQFx7kzH+3GA01euhE5D"; STUDY_PERSIST="4PJxiBH8H3n870h0EGWQcELyntZh9jo89yEqFBxE01yFQiEBpsE01C1CkGyHlTUwrTnpYuH5cooa3w5gdlcR5PtcPiZNHeKd1h3A51QsYhhI4RXF7tFAHNil3h4ZP3m7CiyB8xFEiTNq5eqTkvuqutmRJ8i8tgdI898s5WaU2NvGMgGzCO4IYcry0FZgR3rL2vqQnhe/VBIlRK6r/V75tuOsjQt3rtsEJyTlmo/lCAq37Weq4j/S2qU01oFrl7Ms8WQLi3xTJ45sq/acjsEWiA=="; NETEASE_WDA_UID=1029324064#|#1504077606513; NTES_STUDY_YUNXIN_ACCID=s-1029324064; NTES_STUDY_YUNXIN_TOKEN=adf3afc23d2b7a55b1e9d994bf32d276; videoResolutionType=3; hb_MA-BFF5-63705950A31C_source=www.baidu.com; __utma=129633230.774576541.1525596023.1528477593.1528599819.23; __utmz=129633230.1528599819.23.8.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmb=129633230.4.9.1528600076293',
        "Host": "mooc.study.163.com",
        "Origin": "http://mooc.study.163.com",
        "Referer": "http://mooc.study.163.com/learn/2001281002?tid=2001392029"
    }
}

async function exec() {
    options.url = 'http://mooc.study.163.com/dwr/call/plaincall/CourseBean.getLessonUnitLearnVo.dwr?1528600086192'
    options.body = `callCount=1
scriptSessionId=\${scriptSessionId}190
httpSessionId=bbc1412c16ee42d988260ccb69a87020
c0-scriptName=CourseBean
c0-methodName=getLessonUnitLearnVo
c0-id=0
c0-param0=number:2001392029
c0-param1=number:1006867016
c0-param2=number:1
c0-param3=number:0
c0-param4=number:2001694022
batchId=1528597618841`

    // options.body = Object.entries({
    //     'callCount': 1,
    //     'scriptSessionId': '${scriptSessionId}190',
    //     'httpSessionId': 'bbc1412c16ee42d988260ccb69a87020',
    //     'c0-scriptName': 'CourseBean',
    //     'c0-methodName': 'getLessonUnitLearnVo',
    //     'c0-id': 0,
    //     'c0-param0': 'number:2001392029',
    //     'c0-param1': 'number:1006868018',
    //     'c0-param2': 'number:1',
    //     'c0-param3': 'number:0',
    //     'c0-param4=number': 2001694020,
    //     'batchId': '1528604561027'
    // }).map(([key, value]) => {
    //     return `${key}=${value}`
    // }).join('\n')
    console.log(options.body)
    options.method = 'POST'
    let res = await request(options)
    console.log(res)
}
exec()