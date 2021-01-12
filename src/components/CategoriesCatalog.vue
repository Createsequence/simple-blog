<template>
    <!--文章分类目录组件-->
    <div class="class-catalog">
        <blog-anchor :data="data" :click="click">
            <div slot="title" class="class-catalog-title">
                <slot name="title"/>
            </div>
            <div slot="item" class="class-catalog-item">
                <slot name="item"/>
            </div>
        </blog-anchor>
    </div>
</template>

<script>
    import BlogAnchor from "./base/BlogAnchor/BlogAnchor";

    export default {
        name: "CategoriesCatalog",
        components: {
            BlogAnchor
        },
        props: {
            data: {
                type: Array,
                default: () => []
            },
            click: {
                type: Function,
                default: function (id) {
                    console.log("跳转到id为" + id + "的分类");
                }
            }
        }
    }
</script>

<style scoped>
</style>