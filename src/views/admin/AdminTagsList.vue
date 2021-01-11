<template>
    <div class="admin-tags-list">
        <blog-table :columns="columns"
                    :data="tags"/>
    </div>
</template>

<script>
    import {tags} from "../../assets/js/FillData";
    import BlogTable from "../../components/base/BlogTable";

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
        {
            title: '操作',
            name: '',
            span: 4,
            formatter: function (row, col) {
                return '<a href="#">删除</a> | <a href="#" onclick="">合并</a>'
            }
        },
    ];

    export default {
        name: "AdminTagsList",
        components: {
            BlogTable
        },
        data() {
            return {
                columns: columns,
                tags: tags()
            };
        }
    }
</script>

<style scoped>

</style>