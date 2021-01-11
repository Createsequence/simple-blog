<template>
    <div class="admin-article-draft">
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
            span: 16,
            align: 'left'
        },
        {
            title: '最后修改时间',
            name: 'postDate',
            span: 4
        },
        {
            title: '操作',
            name: 'status',
            span: 4,
            formatter: function (row, col) {
                return '<a href="#">编辑</a> | <a href="#">删除</a>'
            }
        },
    ];

    export default {
        name: "AdminArticleDraft",
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