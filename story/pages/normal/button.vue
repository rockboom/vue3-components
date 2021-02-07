<template>
    <div class="demo-button">
        <pl-button label="label"></pl-button>
        <pl-button>
            BUTTON
        </pl-button>
        <h4>状态</h4>
        <pl-button v-for="item in ['primary','success','warn','error','info']" :label="item" :key="item" :status="item"></pl-button>
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.demo-button{
    .pl-button{
        margin-left: 8px;
    }
}
</style>