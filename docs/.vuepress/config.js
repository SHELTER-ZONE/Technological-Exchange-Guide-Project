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
                title:'Coding',
                path:'/Coding/coding_index',
                collapsable: false,
                sidebarDepth: 1,
                children:[]
            },
            {
                title:'3D',
                path: '/3D/3D_index.md',
                collapsable: false,
                sidebarDepth: 1,
                children:[]
            },
            {
                title:'2D',
                path: '/2D/2D_index.md',
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
