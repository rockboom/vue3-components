<template>
    <div class="demo-input">
        <pl-input></pl-input>
        <h4>状态</h4>
        <pl-input v-for="item in ['primary','success','warn','error','info']" :key="item" :status="item" style="margin-left:8px"></pl-input>
    </div>
</template>

<script>
export default {
    name:"demo-input"
}
</script>

<style>

</style>