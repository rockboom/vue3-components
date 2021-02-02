import { App } from 'vue'

import Input from './packages/input'

const plugins = [
    Input,
]

function install(app: App) {
    plugins.forEach(app.use)
}

export default {
    install,
}

export {
    Input,
    
    install,
}