<template>
    <div class="demo-input">
        <pl-input></pl-input>
        <h4>状态</h4>
        <pl-input v-for="item in ['primary','success','warn','error','info']" :key="item" :status="item" style="margin-left:8px"></pl-input>
        <h4>类型提示</h4>
        <pl-input ref="myInput"/>
        <button @click="outerClear">outer clear</button>
        <button @click="outerFocus">outer focus</button>
    </div>
</template>

<script lang="ts">
import {Input} from "../../../src"
export default {
    name:"demo-input",
    setup(){
        const inputRef = Input.use.ref("myInput");
        return {
            outerClear:()=>{
                inputRef.value!.methods.clear();
            },
            outerFocus:()=>{
                inputRef.value!.methods.focus(false); // vue文件里面有问题，提示不会消失
            }
        }
    }
}
</script>

<style>

</style>