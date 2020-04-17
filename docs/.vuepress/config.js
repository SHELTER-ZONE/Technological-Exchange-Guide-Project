module.exports = {
    title :  'SHELTER ZONE | Ask Questions Guide',
    description:  'SZ Ask Questions Guide',
    themes: 'vuepress',
    base: '/Ask-Questions-Guide/',

    themeConfig: {
        // 側邊導航欄設定
        sidebar:[
            '/',
            {
                title:'錯誤範例',
                path:'/BadExample/badExample',
                collapsable: false,
                sidebarDepth: 1,
                children:[]
            },
        ],

        //  頂部導航欄
        nav: [
            { text: '官網', link: 'https://shelterzone627.wixsite.com/shelter-zone' },
            { text: 'Github', link: 'https://github.com/SHELTER-ZONE' },
        ]
    }        
}
