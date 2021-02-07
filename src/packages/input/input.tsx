import { designComponent } from "src/use/designComponent";
import { computed, defineComponent, ref } from "vue";
import './input.scss';
console.log("加载了 Input 组件");

export default designComponent({
    name: "pl-input",
    props: {
        status: { type: String, default: "primary" }
    },
    setup(props) {
        const modelValue = ref('');
        const inputRef = ref(null as null | HTMLInputElement);

        const classes = computed(() => [
            'pl-input',
            `pl-input-status-${props.status}`
        ]);
        const methods = {
            focus: (flag: boolean) => {
                inputRef.value!.focus();
                if (flag) {
                    modelValue.value = "";
                }
            },
            clear: () => {
                modelValue.value = '';
            }
        }
        return {
            refer: {
                methods,
                modelValue
            },
            render: () => (
                <div class={classes.value}>
                    <input class="pl-input-inner" type="text" v-model={modelValue.value} ref={inputRef} />
                    <button onClick={methods.clear}>Clear</button>
                    <button onClick={() => methods.focus(true)}>Focus</button>
                </div>
            )

        }
    }
})