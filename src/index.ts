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

export default {
    install,
}

export {
    Input,
    Button,

    install,
}