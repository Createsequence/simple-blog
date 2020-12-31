<template>
    <div id="content" class="content">
        <blog-content>
            <personal-info slot="left" :data="info"/>
            <article-list slot="right"
                          :data="articleList"
                          :abstract-config="abstractConfig"/>
        </blog-content>
    </div>
</template>

<script>
    import {config} from "../../config";
    import {articleList} from "../assets/js/FillData";
    import BlogContent from "../components/base/BlogContent";
    import ArticleList from "../components/ArticleList";
    import PersonalInfo from "../components/PersonalInfo";

    export default {
        name: "Content",
        components: {
            BlogContent,
            ArticleList,
            PersonalInfo
        },
        data() {
            return {
                info: config.info,
                abstractConfig: config.content.abstract,
                articleList: articleList()
            }
        }
    }
</script>

<style scoped>
</style>