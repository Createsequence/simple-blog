<template>
    <div id="details" class="details">
        <blog-content>
            <article-catalog slot="left"/>
            <article-details slot="right" :data="article"/>
        </blog-content>
    </div>
</template>

<script>
    import {article} from "../assets/js/FillData";

    import BlogContent from "../components/base/BlogContent";
    import ArticleDetails from "../components/ArticleDetails";
    import ArticleCatalog from "../components/ArticleCatalog";

    export default {
        name: "Details",
        components: {
            BlogContent,
            ArticleDetails,
            ArticleCatalog
        },
        data() {
            return {
                article: article
            }
        },
        mounted() {
            console.log('请求的文章id为：' + this.$route.query.id);
        }
    }
</script>

<style scoped>
</style>