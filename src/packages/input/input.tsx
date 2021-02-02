import { computed, defineComponent, ref } from "vue";
import './input.scss';

export default defineComponent({
    name: "pl-input",
    props: {
        status: { type: String, default: "primary" }
    },
    setup(props) {
        const modelValue = ref('');
        const inputRef = ref(null as null | HTMLInputElement);

        const classes = computed(()=>[
            'pl-input',
            `pl-input-status-${props.status}`
        ]);
        return () => (
            <div class={classes.value}>
                <input class="pl-input-inner" type="text" v-model={modelValue.value} ref={inputRef}/>
            </div>
        )
    }
})