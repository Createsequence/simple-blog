<template>
    <div class="admin-menus-list">

        <blog-table :data="categories">

            <div slot="head">
                <blog-table-tr>
                    <blog-table-td v-for="c in columns" :span="c.span" :html="c.title" :align="c.align"/>

                    <blog-table-td span="3" html="操作"/>
                </blog-table-tr>
            </div>

            <div slot="body">
                <blog-table-tr v-for="a in categories.data" >
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
    import {categories} from "../../assets/js/FillData";
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
            span: 3,
            formatter(row, col) {
                return row.count + '篇'
            }
        },
        {
            title: '创建时间',
            name: 'createData',
            span: 3
        },
    ];

    export default {
        name: "AdminMenusList",
        components: {
            BlogTable,
            BlogTableTr: BlogTable.components.BlogTableTr,
            BlogTableTd: BlogTable.components.BlogTableTd
        },
        data() {
            return {
                columns: columns,
                categories: categories()
            };
        }
    }
</script>

<style scoped>

</style>