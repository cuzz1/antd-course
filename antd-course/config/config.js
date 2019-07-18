export default {
    singular: true,
    // 插件
    plugins: [
        ['umi-plugin-react', {
            // 打开 antd 插件
            antd: true,
            dva: true
        }],
    ],
    // 路由
    routes: [{
        path: '/',
        component: '../layout',
        // component: './helloworld',
        routes: [
            {
                path: 'helloworld',
                component: './HelloWorld'
            },
            {
                path: '/helloworld',
                component: 'Helloworld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
            {   path: 'puzzlecards',
                component: './puzzlecards' },
        ]
    }],
};
