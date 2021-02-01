import { defineComponent, inject, onBeforeUnmount, provide, reactive } from "vue";
interface AppRoute {
    path?: string;
    hash?: string;
    param?: string;
}
function getRoute(): AppRoute | null {
    // github免费版本不能配置路由 所有用简单版本的hash路由处理
    let locationHash = window.location.hash;
    if (!locationHash) {
        return null;
    }
    if (locationHash.charAt(0) === '#') {
        locationHash = locationHash.slice(1);
    }
    // 取出#以后hash为空 则直接返回
    if (!locationHash) {
        return null;
    }
    /* 
        localhost:8080:vue3-components/#normal/icon/#basic-usage 
        需要再次通过#进行切分
    */
    const [path, hash] = (decodeURIComponent(locationHash)).split('#');
    return {
        path,
        hash
    }
}

const APP_NAVIGATOR_PROVIDES = '@@APP_NAVIGATOR_PROVIDES';
function useAppNavigator(props: { defaultPath?: string }) {
    let initRoute = getRoute();
    if (!initRoute) {
        initRoute = { path: props.defaultPath };
    }

    const state = reactive({
        route: initRoute
    })

    const utils = {
        reset: () => {
            const route = getRoute();
            if (!!route) {
                state.route = route;
            }
        }
    }
    const handler = {
        hashChange: () => utils.reset()
    }
    const methods = {
        go: (path: string) => {
            window.location.hash = encodeURIComponent(path);
        }
    }
    window.addEventListener('hashchange', handler.hashChange);

    onBeforeUnmount(() => window.addEventListener('hashchange', handler.hashChange));
    
    const refer = {
        state,
        methods
    }

    provide(APP_NAVIGATOR_PROVIDES, refer);
    return refer;
}

export function injectAppNavigator(): ReturnType<typeof useAppNavigator> {
    return inject(APP_NAVIGATOR_PROVIDES) as any;
}

export const AppNavigator = defineComponent({
    props: {
        defaultPath: String                     // 当没有路径时，默认显示的页面
    },
    setup(props, setupContext) {
        useAppNavigator(props);
        return () => {
            return !!setupContext.slots.default ? setupContext.slots.default() : null;
        }
    }
})