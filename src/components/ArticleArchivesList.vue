<template>
    <!--不带文章摘要和发布信息的文章列表组件，用于归档-->
    <div class="article-archives-list">
        <div class="article-archives-item" v-for="posts in data.data">
            <!--时间分组-->
            <div class="article-archives-time">
                {{posts.postDate}}
            </div>
            <!--文章列表-->
            <div class="article-archives-title" v-for="article in posts.articles">
                <a @click="link(article.id)">
                    {{article.title}}
                </a>
                <span>{{article.postDate}}</span>
            </div>
        </div>

        <!--分页-->
        <div class="pagination">
            <a-pagination show-quick-jumper
                          :total="data.total"
                          :current="current"
                          @change="changePage"/>
        </div>
    </div>
</template>

<script>
    import {linkToArticle} from "../assets/js/utils";

    export default {
        name: "ArticleArchivesList",
        props: {
            data: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {
                current: 1,
                pageSize: 10
            }
        },
        methods: {
            link: function (id) {
                linkToArticle(this, id);
            },
            changePage: function(pageNum) {
                this.current = pageNum;
                this.pageSize = 10;
            }
        }
    }
</script>

<style lang="less">
    .article-archives-time {
        font-weight: bold;
        font-size: var(--h3);
        padding: 1em 0;
    }
    .article-archives-title {
        font-size: var(--h5);
        padding: 0.5em 0 0.2em 0;
        border-bottom: 1px var(--my-cyan) dashed;

        span {
            font-size: var(--h6);
            padding-left: 1em;
        }
    }
    .pagination {
        padding-top: 5em;
        text-align: center;
    }
</style>