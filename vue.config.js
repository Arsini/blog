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
    chainWebpack: (config) => {
        config.optimization.splitChunks({
            cacheGroups: {}
        });
    },
}
