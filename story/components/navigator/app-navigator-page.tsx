import { designComponent } from "src/use/designComponent";
import { DefineComponent, defineComponent, reactive, watch, markRaw } from "vue";
import { AppNavigator } from "./app-navigator";

export const AppNavigatorPage = designComponent({
    setup() {
        const navigator = AppNavigator.use.inject();
        
        const state = reactive({
            PageComponent: null as null | DefineComponent
        })
        const utils = {
            reset: async () => {
                const route = navigator.state.route;
                if (!route) {
                    return;
                }
                let { path } = route;
                if(!path){
                    return;
                }
                if(path.charAt(0) == '/'){
                    path = path.slice(1);
                }
                // 默认导出 所以取 .default
                const Component = (await import('story/pages/'+path)).default;
                // markRow把响应式变成非响应式
                state.PageComponent = markRaw(Component);
            }
        }
        watch(()=> navigator.state.route.path,utils.reset,{immediate:true});
        return {
            render: () => {
                const { PageComponent } = state;
                return !!PageComponent ? <PageComponent /> : null;
            }
        }
    }
})