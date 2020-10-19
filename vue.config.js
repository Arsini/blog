module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    pages: {
        pc: {
            entry: 'src/main_pc.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['pc']
        },
        mobile: {
            entry: 'src/main_mobile.js',
            template: 'public/mobile.html',
            filename: 'mobile.html',
            chunks: ['mobile']
        }
    },
    chainWebpack: config => {
        config.plugins.delete(`prefetch-pc`);
        config.plugins.delete(`prefetch-mobile`);
        config.plugins.delete(`preload-pc`);
        config.plugins.delete(`preload-mobile`);
        config.optimization.splitChunks({
            cacheGroups: {}
        });
    },
    devServer: {
        open: true,
        proxy: 'http://192.168.0.13:3000/'
    },
}
