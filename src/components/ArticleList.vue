<template>
    <!--文章列表组件-->
    <div class="article-list">

        <div class="posts">
            <div class="post" v-for="post in data.data">
                <div class="post-title">
                    <a @click="link(post.id)">{{post.title}}</a>
                </div>
                <div class="post-content">
                    {{abstract(post.content)}}
                </div>
                <div class="post-info">
                    阅读({{post.read}}) 评论({{post.comment}}) @ posted by {{post.author}} on {{post.postDate}}
                </div>
                <a-divider dashed/>
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
    export default {
        name: "ArticleList",
        props: {
            data: {
                type: Object,
                default: () => {}
            },
            abstractConfig: {
                type: Object,
                default: () => {
                    return {
                        auto: true,
                        length: 300
                    }
                }
            }
        },
        data() {
            return {
                current: 1,
                pageSize: 10
            }
        },
        methods: {
            // 截取摘要
            abstract: function(content) {
                let abstractConfig = this.abstractConfig;
                content = content.replace(/<.*?>/g, "");
                return (abstractConfig.auto && content.length > abstractConfig.length) ?
                    content.substring(0, abstractConfig.length) + "......" : content;
            },
            changePage: function(pageNum) {
                this.current = pageNum;
                this.pageSize = 10;
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