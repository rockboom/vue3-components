const path = require('path')
const { config } = require('process')
const resolve = filePath => path.join(__dirname, './', filePath)

module.exports = {
    outputDir:'docs',
    publicPath:'/vue3-components/',
    pages:{
        index:{
            entry:resolve('story/main.ts'),
            template:'public/index.html',
            filename:'index.html',
            title:'组件库示例'
        }
    },
    chainWebpack:(config)=>{
        /* 
            prefetch-index preload-index 会给页面的script标签加上sync defer属性 
            会一开始就异步加载不需要的script文件，预加载组件示例，导致demo示例页面按需加载失效
            需要点击才会加载页面的chunk文件 需要删除这两个插件
        */
        config.plugins
                .delete('prefetch-index')
                .delete('preload-index');
        /*
            添加别名 
            import xxx from 'story/xxx' 时
            引入的story目录下的文件
        */
        config.resolve.alias
                            .set('story',resolve('story'))
                            .set('src',resolve('src'))
    },
    css:{
        loaderOptions:{
            sass:{
                prependData: `@import "src/style/global-import.scss";`
            }
        }
    }
}
