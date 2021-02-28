import resolve from '@rollup/plugin-node-resolve'; // 用来解析路径
import commonjs from '@rollup/plugin-commonjs'; // 引入commonjs规范的包
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import {DEFAULT_EXTENSIONS} from '@babel/core'; // 编译代码
import {terser} from "rollup-plugin-terser"; // 压缩代码
import postcss from 'rollup-plugin-postcss' // 方便使用sass autoprefixer

export default [
    {
        input: 'src/index.ts',
        output: {
            name: 'Vue3Components', // script标签引入时 全局调用的名字
            dir: 'dist',
            format: 'umd',
            sourcemap: true,
            exports: 'named', // 具名导出
            globals: {vue: 'Vue',} // 引入浏览器环境下的Vue
        },
        external: ['vue'],
        plugins: [
            postcss({
                extract: 'index.css',
                minimize: true,
                extensions: ['.css', '.scss'],
                config: true,
                use: [
                    ['sass', {
                        data: '@import "src/style/global-import.scss";'
                    }]
                ]
            }),
            commonjs(),
            resolve(),
            terser(),
            typescript(),
            babel({
                extensions: [
                    ...DEFAULT_EXTENSIONS,
                    '.ts',
                    '.tsx'
                ],
                babelHelpers: 'runtime',
                exclude: "**/node_modules/**",
                presets: [
                    '@vue/cli-plugin-babel/preset'
                ],
            })
        ]
    }
]