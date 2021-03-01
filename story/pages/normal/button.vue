<template>
    <div class="demo-button">
        <h-button label="label"></h-button>
        <h-button>
            BUTTON
        </h-button>
        <h4>状态</h4>
        <h-button v-for="item in ['primary','success','warn','error','info']" :label="item" :key="item" :status="item"></h-button>
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.demo-button{
    .h-button{
        margin-left: 8px;
    }
}
</style>