<template>
    <div class="home">
        <a-layout>

            <!--顶部菜单-->
            <a-layout-header class="head">
                <a-row>
                    <!--标题-->
                    <a-col :xs="{ span: 0 }" :sm="{ span: 3, offset: 2 }">
                        <div class="logo">
                            {{config.info.title}}
                        </div>
                    </a-col>
                    <!--菜单-->
                    <a-col :xs="{ span: 24 }" :sm="{ span: 17 }">
                        <a-menu mode="horizontal" class="menu">
                            <a-menu-item key="1" class="menuItem">文章</a-menu-item>
                            <a-menu-item key="2" class="menuItem">归类</a-menu-item>
                            <a-menu-item key="3" class="menuItem">搜索</a-menu-item>
                            <a-menu-item key="4" class="menuItem">关于</a-menu-item>
                            <a-menu-item key="5" class="menuItem">登录</a-menu-item>
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
        }
    }
</script>

<style lang="less">

    @bgcolor: var(--my-white);
    .head {
        background-color: @bgcolor;
        width: 100%;
        position: fixed;

        .logo {
            width: 120px;
            height: 31px;
            float: left;
            font-size: var(--h3);
            font-weight: bold;
            text-align: center;
        }

        .menu {
            background-color: @bgcolor;
            line-height: var(--menu-height);
            font-size: var(--h4);
            float: right;
        }
    }

    .copyright {
        text-align: center;
        font-size: var(--h6);
        background-color: @bgcolor;
    }
</style>