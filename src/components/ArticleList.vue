<template>
    <div class="article-list">
        <!--文章列表-->
        <div class="posts">
            <div class="post" v-for="p in posts">
                <div class="post-title">
                    <a @click="link(p.id)">{{p.title}}</a>
                </div>
                <div class="post-content">
                    {{abstract(p.content)}}
                </div>
                <div class="post-info">
                    阅读({{p.read}}) 评论({{p.comment}}) @ posted by {{p.author}} on {{p.postDate}}
                </div>
                <a-divider dashed/>
            </div>
        </div>
        <!--分页-->
        <div class="pagination">
            <a-pagination show-quick-jumper :default-current="2" :total="500" @change="changePage"/>
        </div>
    </div>
</template>

<script>
    import {config} from "../../config";
    import {posts} from "../assets/js/postData";

    export default {
        name: "ArticleList",
        props: {
            posts: {
                type: Array,
                default: () => posts
            }
        },
        data() {
            return {
                config: config
            }
        },
        methods: {
            // 截取摘要
            abstract: function(content) {
                let abstractConfig = this.config.content.abstract;
                content = content.replace(/<.*?>/g, "");
                return (abstractConfig.auto && content.length > abstractConfig.length) ?
                    content.substring(0, abstractConfig.length) + "......" : content;
            },
            changePage: function(pageNum) {
                console.log(pageNum);
            },
            link: function(id) {
                this.$router.push({
                    path: '/home/details',
                    query: {id: id}
                })
            }
        }
    }
</script>

<style lang="less">
    .article-list {
        .post-info {
            text-align: right;
        }
        .post-content {
            text-indent:2em;
        }
        .pagination {
            text-align: center;
        }
    }
</style>