<template>
    <div class="archives">
        <blog-content>
            <categories-catalog slot="left"
                           :data="tags"
                           :click="jump">
                <div slot="title">共有 {{tags.length}} 个标签</div>
            </categories-catalog>

            <article-archives-list slot="right"
                                   :data="articleArchivesList"/>
        </blog-content>
    </div>
</template>

<script>
    import {tags, articleArchivesList} from "../assets/js/FillData";

    import BlogContent from "../components/base/BlogContent";
    import CategoriesCatalog from "../components/CategoriesCatalog";
    import ArticleArchivesList from "../components/ArticleArchivesList";

    export default {
        name: "Archives",
        components: {
            BlogContent,
            CategoriesCatalog,
            ArticleArchivesList,
        },
        data() {
            return {
                tags: tags(),
                articleArchivesList: articleArchivesList()
            }
        },
        methods: {
            jump: function (id) {
                console.log("跳转到id为" + id + "的标签分类");
            }
        }
    }
</script>

<style scoped>
    .article-archives-list {
        padding-top: var(--head-height);
    }
</style>