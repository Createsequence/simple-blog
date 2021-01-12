<template>
    <!--表格的列，需要嵌套在表格行组件BlogTableTr中-->
    <a-row class="blog-table-tr">
        <slot></slot>
    </a-row>
</template>

<script>
    export default {
        name: "BlogTableTr"
    }
</script>

<style scoped>

</style>