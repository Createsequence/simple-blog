<template>
    <div id="content" class="content">
        <blog-content>
            <personal-info slot="left" :data="info"/>
            <article-list slot="right"
                          :data="posts"
                          :abstract-config="abstractConfig"/>
        </blog-content>
    </div>
</template>

<script>
    import {config} from "../../config";
    import {posts} from "../assets/js/FillData";

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
                posts: posts()
            }
        }
    }
</script>

<style scoped>
</style>