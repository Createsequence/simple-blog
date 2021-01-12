<template>
    <!--表格组件-->
    <div class="blog-table">

        <div class="blog-table-header">
            <slot name="head">
                <blog-table-tr>
                    <blog-table-td v-for="col in columns"
                                   v-if="col.display !== false"
                                   :html="col.title"
                                   :span="col.span"
                                   :align="col.align" />
                </blog-table-tr>
            </slot>
        </div>

        <div class="blog-table-body">
            <slot name="body">
                <blog-table-tr v-for="row in data.data">
                    <blog-table-td v-for="col in columns"
                                   v-if="col.display !== false"
                                   :html="getData(row,col)"
                                   :span="col.span"
                                   :align="col.align"/>
                </blog-table-tr>
            </slot>
        </div>

        <div class="blog-table-footer">
            <a-pagination v-if="pagination" show-quick-jumper
                          :total="data.total"
                          :current="current"
                          @change="changePage"/>
        </div>

    </div>

</template>

<script>
    import BlogTableTr from "./BlogTableTr";
    import BlogTableTd from "./BlogTableTd";

    export default {
        name: "BlogTable",
        components: {
            BlogTableTr,
            BlogTableTd
        },
        props: {
            columns: {
                type: Array,
                default: () => []
            },
            data: {
                type: Object,
                default: () => {}
            },
            pagination: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                current: 1,
                pageSize: 10
            }
        },
        methods: {
            getData(row, col) {
                // 若存在自定义格式化函数
                if (col.formatter) {
                    return col.formatter(row, col);
                }
                // 若不是数组
                if (!(col.name instanceof Array)) {
                    return row[col.name];
                }
                return row[col.name[0]];
            },
            getAlign(align) {
                if (align === 'right') {
                    return 'right';
                } else if (align === 'left') {
                    return 'left';
                }
            },
            changePage: function(pageNum) {
                this.current = pageNum;
                this.pageSize = 10;
            },
            click: function (id) {
                console.log(id);
            }
        }
    }
</script>

<style lang="less">
    .blog-table {
        text-align: center;

        .blog-table-header {
            font-weight: bold;
            border-bottom: 1px var(--my-gary) solid;
        }

        .left {
            text-align: left;
        }
        .right {
            text-align: right;
        }

        .blog-table-body {

            .blog-table-tr {
                border-bottom: 1px var(--my-gary) solid;
                padding: 0.3em 0;
            }

            .blog-table-tr:nth-child(odd){
                /*background-color: var(--my-gary);*/
            }

        }

        .blog-table-footer {
            padding-top: 2em;
        }
    }
</style>