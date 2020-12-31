<template>
    <!--个人信息组件-->
    <div class="personal-info">
        <div class="img">
            <img src="../assets/img/Createsequence.jpg">
        </div>
        <div class="author">
            {{data.author}}
        </div>
        <div class="motto">
            {{data.motto}}
        </div>
        <div class="social">
            <a :href="data.social.GitHub">GitHub</a>
            <a-divider type="vertical"/>
            <a :href="data.social.Email">Email</a>
            <a-divider type="vertical"/>
            <a :href="data.social.Blog">Blog</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalInfo",
        props: {
            data: {
                type: Object,
                default: () => {}
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