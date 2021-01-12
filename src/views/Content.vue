<template>
    <div id="content" class="content">
        <blog-content>
            <div slot="left">
                <personal-info :data="info"/>
                <article-search />
            </div>
            <article-list slot="right"
                          :data="articleList"
                          :abstract-config="abstractConfig"/>
        </blog-content>
    </div>
</template>

<script>
    import {articleList} from "../assets/js/FillData";
    import BlogContent from "../components/base/BlogContent";
    import ArticleList from "../components/ArticleList";
    import PersonalInfo from "../components/PersonalInfo";
    import ArticleSearch from "../components/ArticleSearch";

    export default {
        name: "Content",
        components: {
            BlogContent,
            ArticleList,
            PersonalInfo,
            ArticleSearch
        },
        data() {
            return {
                info: this.$config.info,
                abstractConfig: this.$config.content.abstract,
                articleList: articleList()
            }
        }
    }
</script>

<style scoped>
</style>