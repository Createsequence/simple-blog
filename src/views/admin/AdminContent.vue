<template>
    <div class="admin-content">
        <blog-content>
            <div slot="left">
                <blog-anchor slot="left" :data="articleMenus"/>
            </div>
        </blog-content>
    </div>
</template>

<script>
    import BlogContent from "../../components/base/BlogContent";
    import BlogAnchor from "../../components/base/BlogAnchor";

    const articleMenus = [
        {
            id: 1,
            name: '新文章'
        },
        {
            id: 2,
            name: '文章管理'
        }
    ];

    export default {
        name: "AdminContent",
        components: {
            BlogContent,
            BlogAnchor
        },
        data() {
            return {
                articleMenus: articleMenus
            }
        }
    }
</script>

<style scoped>

</style>