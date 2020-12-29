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
                        <a-menu mode="horizontal" class="menu">
                            <a-menu-item key="1" class="menuItem" @click="link('content')">文章</a-menu-item>
                            <a-menu-item key="2" class="menuItem">分类</a-menu-item>
                            <a-menu-item key="3" class="menuItem">归档</a-menu-item>
                            <a-menu-item key="4" class="menuItem">搜索</a-menu-item>
                            <a-menu-item key="5" class="menuItem">关于</a-menu-item>
                        </a-menu>
                    </a-col>
                </a-row>
            </a-layout-header>

            <!--内容-->
            <a-layout class="content">
                <router-view/>
            </a-layout>

            <!--底部栏-->
            <a-layout-footer class="copyright">
                Copyright © {{config.copyright.time}} <a
                    :href="config.copyright.url">{{config.copyright.record}}</a><br/>
                <a :href="config.theme.url">Themes</a>
                By {{config.theme.author}}
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

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                config: config
            }
        },
        methods: {
            link: function(path) {
                this.$router.push({
                    path: '/home/' + path,
                })
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

        .menu {
            background-color: var(--my-white);
            line-height: var(--menu-height);
            font-size: var(--h4);
        }
    }

    .copyright {
        text-align: center;
        font-size: var(--h5);
        background-color: var(--my-white);
        border: 1px;
    }
</style>