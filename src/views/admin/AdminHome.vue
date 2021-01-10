<template>
    <!--管理员主界面-->
    <div class="admin-home">
        <div class="home">
            <a-layout>

                <!--顶部菜单-->
                <a-layout-header id="head" class="head" :style="{zIndex: 1}">
                    <a-row>
                        <!--标题-->
                        <a-col :xs="{ span: 0 }" :sm="{ span: 3, offset: 2 }">
                            <div class="logo">
                                管理后台
                            </div>
                        </a-col>
                        <!--菜单-->
                        <a-col :xs="{ span: 24 }" :sm="{ span: 9, offset: 10 }">
                            <blog-menu :data="menus" horizontal="horizontal"/>
                        </a-col>

                    </a-row>
                </a-layout-header>

                <!--内容-->
                <a-layout class="content">
                    <router-view/>
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
    import BlogMenu from "../../components/base/BlogMenu";

    const menus = [
        {
            name: '文章',
            path: '/admin/article'
        },
        {
            name: '分类',
            path: '/admin/categories'
        },
        {
            name: '标签',
            path: '/admin/tags'
        }
    ];

    export default {
        name: "AdminHome",
        components: {
            BlogMenu
        },
        data() {
            return {
                menus: menus
            }
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

    .foot {
        text-align: center;
        line-height: var(--h5-lh);
        background-color: var(--my-white);
        border: 1px;
        padding-top: 5%;
    }
</style>