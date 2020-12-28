<template>
    <a-layout-content class="content">
        <a-row>
            <!--左侧边信息栏-->
            <a-col :xs="{ span: 0 }" :sm="{ span: 5, offset: 1 }" class="side">

                <a-row>
                    <!--个人信息-->
                    <a-col :xs="{ span: 0 }" :sm="{ span: 24 }">
                        <div class="img">
                            <img src="../assets/img/Createsequence.jpg">
                        </div>
                        <div class="author">
                            {{config.info.author}}
                        </div>
                        <div class="motto">
                            {{config.info.motto}}
                        </div>
                        <div class="social">
                            <a :href="config.info.social.GitHub">GitHub</a>
                            <a-divider type="vertical"/>
                            <a :href="config.info.social.Email">Email</a>
                            <a-divider type="vertical"/>
                            <a :href="config.info.social.Blog">Blog</a>
                        </div>
                    </a-col>

                    <!--目录-->
                    <!--<a-col :xs="{ span: 0 }" :sm="{ span: 20, offset: 3 }" id="catalog" class="catalog">
                        <div class="h1">
                            <a href="">这个是一级标题</a>
                            <div class="h2"><a href="">这个是二级标题</a></div>
                            <div class="h2"><a href="">这个是二级标题</a></div>
                            <div class="h2"><a href="">这个是二级标题</a></div>
                        </div>
                        <div class="h1">
                            <a href="">这个是二级标题</a>
                        </div>
                    </a-col>-->

                </a-row>
            </a-col>

            <!--右侧文章列表-->
            <a-col :xs="{ span: 20, offset: 2 }" :sm="{ span: 14, offset: 1 }">
                <router-view/>
            </a-col>

        </a-row>
    </a-layout-content>
</template>

<script>
    import {config} from "../../config";
    import {getCatalog} from "../assets/js/utils";
    // 引入jquery
    import $ from 'jquery'
    window.jQuery = $;
    require('../assets/js/plugins/portamento.js');

    export default {
        name: "Content",
        data() {
            return {
                config: config,
                titles: {}
            }
        },
        mounted() {
            this.$nextTick(function () {
                // let cat = getCatalog();
                // console.log(cat);
                // this.titles = cat;

                // $('#catalog').portamento()
            })
        }
    }
</script>

<style lang="less">
    .side {
        position: relative;
        border-right: 1px var(--my-gary) dashed;
        text-align: center;
        div {
            padding: 5px 0;
        }
        img {
            width: 50%;
        }
        .author {
            font-weight: bold;
            font-size: var(--h3);
        }

        /*#catalog {
            float: none;
            position: absolute;
        }
        #catalog.fixed {
            position: fixed;
        }*/
    }

    .catalog {
        border: 1px red dashed;
        background-color: var(--my-white);
        text-align: left;
        .h1 {
            padding: 0;
        }
        .h2 {
            padding-left: 35px;
        }
    }
</style>