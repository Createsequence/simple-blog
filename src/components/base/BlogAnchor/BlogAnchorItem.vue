<template>
    <div class="anchor-item">
        <a :id="id" @click="click(clickValue)">
            <slot>{{text}}</slot>
        </a>
        <slot name="items"></slot>
    </div>
</template>

<script>
    export default {
        name: "BlogAnchorItem",
        props: {
            id: String | Number,
            click: {
                type: Function,
                default: () => {}
            },
            clickValue: String,
            text: String | Number,
        }
    }
</script>

<style scoped>

</style>