<template>
    <div class="article">
        <div class="posts">
            <div class="post">
                <!--标题-->
                <div class="post-title">
                    <a :href="link">{{article.title}}</a>
                </div>
                <div class="post-info">
                    发布于: {{article.postDate}}
                    <a-divider type="vertical"/>
                    分类: <a>{{article.classificationName}}</a>
                </div>

                <!--正文-->
                <div id="post-content" class="post-content" v-html="article.content" v-highlightjs />

            </div>
        </div>
    </div>
</template>

<script>
    import {posts} from "../assets/js/postData";

    export default {
        name: "Article",
        data() {
            return {
                article: posts[0]
            }
        },
        computed: {
            link: function () {
                return window.location.href;
            }
        }
    }
</script>

<style lang="less">
    .post-info {
        text-align: center;
    }
</style>