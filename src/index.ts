import { App } from 'vue'

import Input from './packages/input'
import Button from './packages/button'

const plugins = [
    Input,
    Button
]

function install(app: App) {
    plugins.forEach(app.use)
}

export default { // 默认导出
    install,
}

export { // 具名导出 对应rollup的配置项  exports: 'named'
    Input,
    Button,

    install,
}