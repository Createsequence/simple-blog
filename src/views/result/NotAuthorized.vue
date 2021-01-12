<template>
    <div class="not-authorized">
        <a-result status="403" title="403" sub-title="嗯? 你好像没有访问的权限......">
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
        name: "NotAuthorized",
        methods: {
            back:function () {
                this.$common.linkToHome();
            }
        }
    }
</script>

<style scoped>

</style>