<template>
    <a-layout-content class="content">
        <a-row>
            <a-col :xs="{ span: 0 }" :sm="{ span: 5, offset: 0 }" class="side">
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
                    <a :href="config.info.social.GitHub">GitHub</a> ●
                    <a :href="config.info.social.Email">Email</a> ●
                    <a :href="config.info.social.Blog">Blog</a>
                </div>
            </a-col>
            <a-col :xs="{ span: 24 }" :sm="{ span: 18, offset: 1 }">
            </a-col>
        </a-row>
    </a-layout-content>
</template>

<script>
    import {config} from "../../config";

    export default {
        name: "Content",
        data() {
            return {
                config: config
            }
        }
    }
</script>

<style lang="less">
    .content {
        padding: var(--menu-height) var(--content-padding);
    }
    .side {
        border-right: 1px var(--my-cyan) double;
        text-align: center;
        div {
            padding: 5px 0;
        }
        img {
            width: 50%;
        }
        .author {
            font-weight: bold;
            font-size: var(--h4);
        }
    }
</style>