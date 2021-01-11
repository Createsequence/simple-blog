<template>
    <div class="admin-article-abandoned">
        <blog-table :columns="columns"
                    :data="articleList"/>
    </div>
</template>

<script>
    import {articleList} from "../../assets/js/FillData";
    import BlogTable from "../../components/base/BlogTable";

    const columns = [
        {
            title: '标题',
            name: 'title',
            span: 14,
            align: 'left'
        },
        {
            title: '已删除时间',
            name: 'postDate',
            span: 3,
            formatter(row, col) {
                return '13天'
            }
        },
        {
            title: '创建时间',
            name: 'postDate',
            span: 3
        },
        {
            title: '操作',
            name: 'status',
            span: 4,
            formatter: function (row, col) {
                return '<a href="#">恢复</a> | <a href="#" onclick="remove(remove)">彻底删除</a>'
            }
        },
    ];

    export default {
        name: "AdminArticleAbandoned",
        components: {
            BlogTable
        },
        data() {
            return {
                columns: columns,
                articleList: articleList()
            };
        }
    }
</script>

<style scoped>

</style>