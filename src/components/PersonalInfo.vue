<template>
    <div class="personal-info">
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
    </div>
</template>

<script>
    import {config} from "../../config";

    export default {
        name: "PersonalInfo",
        data() {
            return {
                config: config
            }
        }
    }
</script>

<style scoped>
    div {
        padding: 5px 0;
    }
    .author {
        font-weight: bold;
        font-size: var(--h3);
    }
</style>