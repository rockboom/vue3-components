import { designComponent } from "../../use/designComponent";
import { computed } from "vue";
import './button.scss';
console.log("加载了 Button 组件");
export default designComponent({
    name:'h-button',
    props:{
        status:{type:String,default:'primary'},
        label:{type:String}
    },
    setup(props,setupContext){
        const classes = computed(()=>[
            'h-button',
            `h-button-status-${props.status}`
        ])
        return {
            render:()=>(
                <button class={classes.value}>
                    {!setupContext.slots.default ? props.label : setupContext.slots.default()}
                </button>
            )
        }
    }
})