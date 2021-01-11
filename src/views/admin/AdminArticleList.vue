<template>
    <div class="admin-article-list">

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
            name: ['title', 'postDate'],
            span: 14,
            align: 'left',
            formatter: function (row, col) {
                return '<a href="#">' + row.title + '</a>' + ' (' + row.postDate + ')';
            }
        },
        {
            title: '阅读量',
            name: 'read',
            span: 2
        },
        {
            title: '评论',
            name: 'comment',
            span: 2
        },
        {
            title: '发布状态',
            name: 'status',
            span: 3
        },
        {
            title: '操作',
            name: 'status',
            span: 3,
            formatter: function (row, col) {
                return '<a href="#">编辑</a> | <a href="#">删除</a>'
            }
        },
    ];

    export default {
        name: "AdminArticleList",
        components: {
            BlogTable
        },
        data() {
            return {
                articleList: articleList(),
                columns: columns
            }
        }
    }
</script>

<style lang="less">
    .admin-article-list {
        padding-top: var(--head-height);
    }
</style>