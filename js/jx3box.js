const JX3BOX = {

    __Domain: "www.jx3box.com",


    /*🌸域&根*/
    __Root: "https://www.jx3box.com/",
    __v2: "https://v2.jx3box.com/",
    __cloud: "https://cloud.jx3box.com/",   //OSS CDN分发


    /*🌸资源域*/
    __ossRoot: "https://oss.jx3box.com/",
    __ossMirror: "https://console.cnyixun.com/",
    __ossCloudflare: "https://jx3box.imkog.com/",
    __ossGithub: "https://cdn.jx3box.com/",


    /*🌸图像类*/
    //oss/jx3box/img
    __imgPath: "https://console.cnyixun.com/img/",
    __imgPath_BAK: "https://cdn.jx3box.com/img/",

    //oss/jx3box/image
    __imagePath: "https://console.cnyixun.com/image/",
    __imagePath_BAK: "https://cdn.jx3box.com/image/",

    //oss/jx3box/icon
    __iconPath: "https://console.cnyixun.com/icon/",
    __iconPath_BAK: "https://icon.jx3box.com/icon/",

    //oss/jx3box/emotion
    __emtionPath: "https://console.cnyixun.com/emotion/",
    __emtionPath_BAK: "https://jx3box.imkog.com/emotion/",

    /*🌸前端类*/
    //oss/jx3box/data
    __dataPath: "https://cdn.jsdelivr.net/gh/JX3BOX/jx3box-oss/data/",
    __dataPath_BAK: "https://cdn.jx3box.com/data/",
    
    //oss/jx3box/static/wp_mirror/wp-content|admin|includes
    __wpmirrorPath:"https://cdn.jsdelivr.net/gh/JX3BOX/jx3box-mirror/",
    __wpmirrorPath_BAK:"https://mirror.jx3box.com/",

    //oss/jx3box/static/wp_static/css|js
    __wpstaticPath: "https://cdn.jsdelivr.net/gh/iRuxu/jx3box-static/dist/",
    __wpstaticPath_BAK: "https://static.jx3box.com/dist/", 

    //oss/jx3box-www/project 
    __staticPath : {
        jsdelivr : "https://cdn.jsdelivr.net/gh/JX3BOX/",   // repo@gh-pages/ + ~
        mirror: "https://cloud.jx3box.com/",    // oss/jx3box-www/repo/ + ~
    },
    

    /*🌸接口*/
    // nodejs
    __server: "https://server.jx3box.com/",
    // go
    __api: "https://api.jx3box.com/",
    // php
    __helperUrl: "https://helper.jx3box.com/",
    // 代理服务
    __proxy: "https://proxy.jx3box.com/",
    

    /*🌸预设*/
    // 文章类型
    __postType: {
        posts: "论坛",
        macro: "剑三宏库",
        jx3dat: "插件数据",
        fb: "副本攻略",
        bps: "职业攻略",
        cj: "成就百科",
        share: "捏脸分享",
        tool: "教程工具",
        help: "帮助文档",
        post: "茶馆交流",
        page: "系统页面"
    },

    // 用户组
    __userGroup:{
        0 : '游客',
        1 : '登录用户',
        8 : '已验证用户',
        16 : '会员用户',
        32 : '签约作者',
        64 : '管理员'
    },

    // 用户等级
    __userLevel : {
        0 : '稻香萌新'
    },


    /*🌸链接*/
    // 栏目链接
    __Links : {
        account : {
            login : 'https://v2.jx3box.com/account/login',
            register : 'https://v2.jx3box.com/account/register',
            email_verify : 'https://v2.jx3box.com/account/email_verify',
            login_callback : 'https://v2.jx3box.com/account/login_callback',
            oauth_server : 'https://server.jx3box.com/oauth/jx3box/authorize'
        },
        dashboard : {
            home : "https://v2.jx3box.com/dashboard",
            msg : "https://v2.jx3box.com/dashboard/#/msg",
            work : "https://v2.jx3box.com/dashboard/#/work",
            feed : "https://v2.jx3box.com/dashboard/#/feed",
            fav : "https://v2.jx3box.com/dashboard/#/fav",
            connect : "https://v2.jx3box.com/dashboard/#/connect",
        },


        author : "https://v2.jx3box.com/author/", 
        about : "https://v2.jx3box.com/about",  //关于,版权,团队,联系


        search : 'https://search.jx3box.com/',
        wiki: "https://wiki.jx3box.com/", //游戏内嵌页
        jx3: "https://xn--3-4g8a959k.com/", //剑三大事件
    },

    // 其它链接
    default_avatar: "https://console.cnyixun.com/image/common/avatar.png",
    feedback : "https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=o8LHzsrN48nbkMHM243AzM4",

};

module.exports = JX3BOX