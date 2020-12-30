<template>
    <!--文章分类目录组件-->
    <div class="class-catalog">
        <blog-anchor :data="data" :click="jump">
            <div slot="title">文章分类</div>
        </blog-anchor>
    </div>
</template>

<script>
    import BlogAnchor from "./base/BlogAnchor";

    export default {
        name: "ClassCatalog",
        components: {
            BlogAnchor
        },
        props: {
            data: {
                type: Array,
                default: () => []
            },
        },
        methods: {
            jump: function (id) {
                console.log("跳转到id为" + id + "的文章分类");
            }
        }
    }
</script>

<style scoped>

</style>