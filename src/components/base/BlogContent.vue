<template>
    <!--博客正文栏，布局由固定的浮动左侧栏和右侧栏组成-->
    <a-layout-content id="blog-content" class="blog-content">
        <a-row>

            <!--左侧栏-->
            <a-col :xs="{ span: 0 }" :sm="{ span: 5, offset: 1 }">
                <a-row id="side-left" class="side-left">
                    <slot name="left"></slot>
                </a-row>
            </a-col>

            <!--右侧栏-->
            <a-col :xs="{ span: 20, offset: 2 }" :sm="{ span: 14, offset: 1 }" id="side-right" class="side-right">
                <slot name="right"></slot>
            </a-col>

        </a-row>
    </a-layout-content>
</template>

<script>
    // 引入jquery
    import $ from 'jquery'
    window.jQuery = $;
    require('../../assets/js/plugins/portamento.js');
    // 生成浮动窗口
    import {generateFixedWindow} from "../../assets/js/utils";

    export default {
        name: "BlogContent",
        mounted() {
            this.$nextTick(function () {
                generateFixedWindow();
            })
        },
        updated() {
            generateFixedWindow();
        }
    }
</script>

<style lang="less">
    .side-left {
        border-right: 1px var(--my-gary) solid;
        text-align: center;
        position: absolute;
        overflow:auto;
        img {
            width: 50%;
        }
    }
    #portamento_container {
        .side-left {
            position: fixed;
        }
    }
</style>