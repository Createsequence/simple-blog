<template>
    <a-col class="blog-table-td" :sm="{ span: span }" :class="align">
        <slot>
            <span v-html="html"></span>
        </slot>
    </a-col>
</template>

<script>
    export default {
        name: "BlogTableTd",
        props: {
            span: String | Number,
            align: {
                type: String,
                required: false
            },
            html: String,
        }
    }
</script>

<style scoped>

</style>