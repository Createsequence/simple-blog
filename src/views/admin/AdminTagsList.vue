<template>
    <div class="admin-tags-list">

        <blog-table :data="tags">

            <div slot="head">
                <blog-table-tr>
                    <blog-table-td v-for="c in columns" :span="c.span" :html="c.title" :align="c.align"/>

                    <blog-table-td span="3" html="操作"/>
                </blog-table-tr>
            </div>

            <div slot="body">
                <blog-table-tr v-for="t in tags.data" >
                    <blog-table-td v-for="c in columns" :span="c.span" :align="c.align">
                        <a href="javaScript:void(0)" @click="show(t.id)">{{t[c.name]}}</a>
                    </blog-table-td>

                    <blog-table-td span="3">
                        <a href="javaScript:void(0)">编辑</a> |
                        <a href="javaScript:void(0)">删除</a>
                    </blog-table-td>
                </blog-table-tr>
            </div>

        </blog-table>

    </div>
</template>

<script>
    import {tags} from "../../assets/js/FillData";
    import BlogTable from "../../components/base/BlogTable/BlogTable";

    const columns = [
        {
            title: '名称',
            name: 'name',
            span: 14,
            align: 'left'
        },
        {
            title: '文章数量',
            name: 'count',
            span: 3
        },
        {
            title: '创建时间',
            name: 'createData',
            span: 3
        },
    ];

    export default {
        name: "AdminTagsList",
        components: {
            BlogTable,
            BlogTableTr: BlogTable.components.BlogTableTr,
            BlogTableTd: BlogTable.components.BlogTableTd
        },
        data() {
            return {
                columns: columns,
                tags: tags()
            };
        },
        methods: {
            show(id) {
                this.$common.linkToArticleListByTag(id);
            },
        }
    }
</script>

<style scoped>

</style>