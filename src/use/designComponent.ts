import { ComponentPropsOptions, defineComponent, ExtractPropTypes, getCurrentInstance, inject, provide, SetupContext } from "vue";

export function designComponent<
    PropsOptions extends Readonly<ComponentPropsOptions>,
    Props extends Readonly<ExtractPropTypes<PropsOptions>>,
    Refer,
    >(options: {
        name?: string,
        props?: PropsOptions,
        provideRefer?: boolean,
        setup: (props: Props, setupContext: SetupContext) => {
            refer?: Refer,
            render: () => any
        }
    }) {
    const { setup, provideRefer, ...leftOptions } = options;
    return {
        ...defineComponent({
            ...leftOptions,
            setup(props: Props, setupContext: SetupContext) {
                const ctx = getCurrentInstance() as any;
                if (!setup) {
                    console.error("designComponent:setup is required!");
                    return () => null;
                }
                const { refer, render } = setup(props, setupContext);
                if(!!refer){
                    const duplicateKey = Object.keys(leftOptions.props||{})
                        .find(i=>Object.prototype.hasOwnProperty.call(refer as any,i));
                    if(!!duplicateKey){
                        console.log(`designComponent: duplicate key ${duplicateKey} in refer`);
                    }else{
                        Object.assign(ctx.proxy,refer);
                    }
                }
                if (provideRefer) {
                    if (!leftOptions.name) {
                        console.error("designComponent:name is required when provideRefer is true!");
                    } else {
                        provide(`@@${leftOptions.name}`, refer);
                    }
                }
                return render;
            }
        } as any),
        use: {
            ref: (refName: string) => {
                const ctx = getCurrentInstance()!
                return {
                    get value() {
                        return ctx.refs[refName] as Refer | null
                    }
                }
            },
            inject: (defaultValue?: any) => {
                return inject(`@@${leftOptions.name}`, defaultValue) as Refer;
            }
        }
    }
}

// const Button = designComponent({
//     name: 'h-button',
//     props: {
//         label: { type: String },
//         age: { type: Number, default: 10 },
//         flag: { type: Boolean, required: true }
//     },
//     setup(props, setupContext) {

//         return {
//             render: () => {}
//         }
//     }
// })