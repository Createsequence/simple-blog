<template>
    <div class="admin-article-draft">

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
            name: 'title',
            span: 16,
            align: 'left',
        },
        {
            title: '最后修改时间',
            name: 'postDate',
            span: 4
        },
    ];

    export default {
        name: "AdminArticleDraft",
        components: {
            BlogTable,
            BlogTableTr: BlogTable.components.BlogTableTr,
            BlogTableTd: BlogTable.components.BlogTableTd
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