<template>
    <div class="server-error">
        <a-result status="500" title="500" sub-title="哦吼，服务器好像出了点问题......">
            <template #extra>
                <a-button type="primary" @click="back">
                    返回首页
                </a-button>
            </template>
        </a-result>
    </div>
</template>

<script>
    export default {
        name: "ServerError",
        methods: {
            back:function () {
                this.$common.linkToHome();
            }
        }
    }
</script>

<style scoped>

</style>