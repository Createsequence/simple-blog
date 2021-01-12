<template>
    <div class="admin-article-list">

        <blog-table :data="articleList">

            <div slot="head">
                <blog-table-tr>
                    <blog-table-td v-for="c in columns" :span="c.span" :html="c.title" :align="c.align"/>

                    <blog-table-td span="3" html="操作"/>
                </blog-table-tr>
            </div>

            <div slot="body">
                <blog-table-tr v-for="a in articleList.data" >
                    <blog-table-td v-for="c in columns" :span="c.span" :align="c.align">
                        {{a[c.name]}}
                    </blog-table-td>

                    <blog-table-td span="3">
                        <a href="#">编辑</a> |
                        <a href="#">删除</a>
                    </blog-table-td>
                </blog-table-tr>
            </div>

        </blog-table>

    </div>
</template>

<script>
    import {articleList} from "../../assets/js/FillData";
    import BlogTable from "../../components/base/BlogTable/BlogTable";

    const columns = [
        {
            title: '标题',
            span: 14,
            name: 'title',
            align: 'left',
        },
        {
            title: '阅读量',
            span: 2,
            name: 'read',
        },
        {
            title: '评论',
            span: 2,
            name: 'comment',
        },
        {
            title: '发布状态',
            span: 3,
            name: 'status'
        },
    ];

    export default {
        name: "AdminArticleList",
        components: {
            BlogTable,
            BlogTableTr: BlogTable.components.BlogTableTr,
            BlogTableTd: BlogTable.components.BlogTableTd
        },
        data() {
            return {
                articleList: articleList(),
                columns: columns
            }
        }
    }
</script>

<style scoped>
</style>