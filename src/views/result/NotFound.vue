<template>
    <div class="not-found">
        <a-result status="404" title="404" sub-title="额，这儿没有你要找的东西......">
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
        name: "NotFound",
        methods: {
            back:function () {
                this.$common.linkToHome();
            }
        }
    }
</script>

<style scoped>

</style>