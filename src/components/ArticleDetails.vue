<template>
    <!--文章详情组件-->
    <div class="article-details">
        <div class="posts">
            <div class="post">
                <!--标题-->
                <div class="post-title">
                    <a :href="link">{{data.title}}</a>
                </div>
                <div class="post-info">
                    阅读量: {{data.read}}
                    <a-divider type="vertical"/>
                    发布于: {{data.postDate}}
                    <a-divider type="vertical"/>
                    分类: <a>{{data.classificationName}}</a>
                </div>

                <!--正文-->
                <div id="post-content" class="post-content" v-html="data.content" v-highlightjs />
            </div>

            <div class="post-end">
                <div class="post-tag">
                    <span v-for="tag in data.tags">
                        #<a :href="tag.id">{{tag.name}} </a>
                    </span>
                </div>
                <a-divider class="post-end-divider"/>
                <span class="post-neighbor-prev">
                    <a :href="data.prevId">
                        上一篇: {{data.prev}}
                    </a>
                </span>
                <span class="post-neighbor-next">
                    <a :href="data.nextId">
                        下一篇: {{data.next}}
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleDetails",
        props: {
            data: {
                type: Object,
                default: () => {}
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
    .article-details {
        padding-top: var(--head-height);
        .post-info {
            text-align: center;
            padding-bottom: 5em;
        }
        .post-end {
            .post-tag {
                text-align: center;
            }
            .post-end-divider {
                color: var(--my-cyan);
            }
            .post-neighbor-prev {
                float: left;
                width: 35%;
            }
            .post-neighbor-next {
                float: right;
                width: 35%;
            }
        }
    }
</style>