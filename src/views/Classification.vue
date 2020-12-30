<template>
    <div class="classification">
        <blog-content>
            <class-catalog slot="left" :data="classification"/>
            <article-list slot="right"
                          :data="posts"
                          :abstract-config="abstractConfig"/>
        </blog-content>
    </div>
</template>

<script>
    import {posts, classification} from "../assets/js/FillData";
    import {config} from "../../config";
    import BlogContent from "../components/base/BlogContent";
    import ClassCatalog from "../components/ClassCatalog";
    import ArticleList from "../components/ArticleList";

    export default {
        name: "Classification",
        components: {
            BlogContent,
            ArticleList,
            ClassCatalog
        },
        data() {
            return {
                classification: classification(),
                abstractConfig: config.content.abstract,
                posts: posts(),
            }
        },
    }
</script>

<style scoped>
    .article-list {
        padding-top: var(--head-height);
    }
</style>