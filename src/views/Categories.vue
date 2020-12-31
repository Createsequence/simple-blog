<template>
    <div class="categories">
        <blog-content>
            <categories-catalog slot="left"
                           :data="categories"
                           :click="jump">
                <a slot="title">共有 {{categories.length}} 个分类</a>
            </categories-catalog>

            <article-list slot="right"
                          :data="articleList"
                          :abstract-config="abstractConfig"/>
        </blog-content>
    </div>
</template>

<script>
    import {articleList, categories} from "../assets/js/FillData";
    import {config} from "../../config";

    import BlogContent from "../components/base/BlogContent";
    import CategoriesCatalog from "../components/CategoriesCatalog";
    import ArticleList from "../components/ArticleList";

    export default {
        name: "Categories",
        components: {
            BlogContent,
            ArticleList,
            CategoriesCatalog
        },
        data() {
            return {
                categories: categories(),
                abstractConfig: config.content.abstract,
                articleList: articleList(),
            }
        },
        methods: {
            jump: function (id) {
                console.log("跳转到id为" + id + "的文章分类");
            }
        }
    }
</script>

<style scoped>
    .article-list {
        padding-top: var(--head-height);
    }
</style>