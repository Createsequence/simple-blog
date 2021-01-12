<template>
    <!--管理员主界面-->
    <div class="admin-home">
        <div class="home">
            <a-layout>

                <!--顶部菜单-->
                <a-layout-header id="head" class="head" :style="{zIndex: 1}">
                    <a-row>
                        <!--标题-->
                        <a-col :xs="{ span: 0 }" :sm="{ span: 22, offset: 2 }">
                            <div class="logo">
                                管理后台
                            </div>
                        </a-col>
                    </a-row>
                </a-layout-header>

                <!--内容-->
                <a-layout class="content">
                    <blog-content>

                        <div slot="left">
                            <blog-anchor>

                                <a-divider>文章管理</a-divider>
                                <blog-anchor-item v-for="am in articleMenus"
                                                  :click-value="am.path"
                                                  :click="click"
                                                  :text="am.name"/>

                                <a-divider>分类管理</a-divider>
                                <blog-anchor-item v-for="cata in categoriseMenus"
                                                  :click-value="cata.path"
                                                  :click="click"
                                                  :text="cata.name"/>

                                <a-divider>标签管理</a-divider>
                                <blog-anchor-item v-for="tag in tagMenus"
                                                  :click-value="tag.path"
                                                  :click="click"
                                                  :text="tag.name"/>
                            </blog-anchor>
                        </div>

                        <div slot="right" class="right">
                            <router-view/>
                        </div>

                    </blog-content>
                </a-layout>

                <!--底部栏-->
                <a-layout-footer id="foot" class="foot">
                </a-layout-footer>
            </a-layout>

            <!--返回顶部-->
            <a-row>
                <a-col :xs="{ span: 0 }" :md="{ span: 24 }">
                    <a-back-top id="back-top"/>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
    import BlogContent from "../../components/base/BlogContent";
    import BlogAnchor from "../../components/base/BlogAnchor/BlogAnchor";
    import BlogAnchorItem from "../../components/base/BlogAnchor/BlogAnchorItem";

    // 文章菜单
    const articleMenus = [
        {
            path: '/admin/articleList',
            name: '文章管理'
        },
        {
            path: '/admin/articleEdit',
            name: '新文章'
        },
        {
            path: '/admin/articleDraft',
            name: '草稿箱'
        },
        {
            path: '/admin/articleAbandoned',
            name: '回收站'
        }
    ];

    // 分类菜单
    const categoriseMenus = [
        {
            path: '/admin/categoriesList',
            name: '分类管理'
        },
    ];

    // 标签菜单
    const tagMenus = [
        {
            path: '/admin/tagsList',
            name: '标签管理'
        },
    ];

    export default {
        name: "AdminHome",
        components: {
            BlogContent,
            BlogAnchor,
            BlogAnchorItem: BlogAnchor.components.BlogAnchorItem
        },
        data() {
            return {
                articleMenus: articleMenus,
                categoriseMenus: categoriseMenus,
                tagMenus: tagMenus
            }
        },
        methods: {
            click(path) {
                this.$router.push({
                    path: path
                })
            },
        }
    }
</script>

<style lang="less">

    .head {
        background-color: var(--my-white);
        width: 100%;
        position: fixed;
        .logo {
            float: left;
            font-size: var(--h2);
            font-weight: bold;
            text-align: center;
        }
    }

    .admin-home .content .right {
        padding-top: var(--head-height);
    }

    .foot {
        text-align: center;
        line-height: var(--h5-lh);
        background-color: var(--my-white);
        border: 1px;
        padding-top: 5%;
    }
</style>