<template>
    <!--搜索组件-->
    <div class="article-search">
        <div class="search-input" id="search-input">
            <a-input-search
                    placeholder="查点什么......"
                    @search="onSearch"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleSearch",
        props: {
            onSearch: {
                type: Function,
                default: function (keyword) {
                    console.log("查询关键为：" + keyword);
                }
            }
        }
    }
</script>

<style lang="less">
    .article-search {
        padding: 20px 15px;
    }
</style>