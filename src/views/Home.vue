<template>
    <div class="home">
        <a-layout>

            <!--顶部菜单-->
            <a-layout-header id="head" class="head" :style="{zIndex: 1}">
                <a-row>
                    <!--标题-->
                    <a-col :xs="{ span: 0 }" :sm="{ span: 3, offset: 2 }">
                        <div class="logo">
                            {{config.info.title}}
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
                <a-row>
                    <a-col :xs="{ span: 24 }" :sm="{ span: 9, offset: 9 }">
                        Copyright © {{config.copyright.time}} <a
                            :href="config.copyright.url">{{config.copyright.record}}</a><br/>
                        <a :href="config.theme.url">Themes</a>
                        By {{config.theme.author}}
                    </a-col>
                </a-row>
            </a-layout-footer>
        </a-layout>

        <!--返回顶部-->
        <a-row>
            <a-col :xs="{ span: 0 }" :md="{ span: 24 }">
                <a-back-top id="back-top"/>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import {config} from "../../config";
    import BlogMenu from "../components/base/BlogMenu";

    const menus = [
        {
            name: '文章',
            path: '/home/content'
        },
        {
            name: '分类',
            path: '/home/categories'
        },
        {
            name: '归档',
            path: '/home/archives'
        },
        {
            name: '关于',
            path: '/home/content'
        }
    ];

    export default {
        name: 'Home',
        components: {
            BlogMenu
        },
        data() {
            return {
                config: config,
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