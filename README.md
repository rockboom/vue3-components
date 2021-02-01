# vue3-components

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构说明
- src: 组件源码
- story: 组件测试代码
    - components: 存放组件代码
        - navigator: 导航组件
    - pages: 放组件示例页面，同时也是路由的根目录
        - normal: 存放普通组件 如button、input
            - button.vue
            - icon.vue
            - color.vue
            - ...
        - form: 表单组件的示例页面目录
        - table: 表格组件的实例页面目录
        - service: 服务组件的实例页面目录 如dialog
        - ...
    - ...
### 导航组件
路由一个由两个组件组成：

- story/components/navigator/app-navigator.tsx：无根节点组件，负责计算window.localtion.hash中的路由信息（这里只做哈希路由，不做那么复杂，怎么简单怎么来）；并且将路由信息以及一些路由跳转方法工具对象provide给子组件；

- story/components/navigator/app-navigator-page.tsx：负责读取app-navigator中的路由信息，根据路由地址按需加载组件示例页面；
其他的，比如首页菜单组件，只需要inject注入 app-navigator提供的对象，当点击菜单跳转的时候调用对象的路由跳转方法即可；

- 当地址栏输入：http://localhost:3366/v3-components/#normal/icon能够看见icon.vue中的内容，地址栏输入http://localhost:3366/v3-components/#normal/color能够看见color.vue中的内容，此时表明路由已经能够正常加载页面；