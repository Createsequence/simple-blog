<template>
    <!--表格组件-->
    <div class="blog-table">

        <div class="blog-table-header">
            <a-row class="blog-table-tr">
                <a-col class="blog-table-td" v-for="col in columns" :md="{ span:col.span }" :class="getAlign(col.align)">
                    {{col.title}}
                </a-col>
            </a-row>
        </div>

        <div class="blog-table-body">
            <a-row class="blog-table-tr" v-for="row in (pagination ? data.data : data)">
                <a-col class="blog-table-td" v-for="col in columns"  v-html="getData(row,col)" :md="{ span:col.span }" :class="getAlign(col.align)" />
            </a-row>
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
    export default {
        name: "BlogTable",
        props: {
            columns: Array,
            data: Object | Array,
            pagination: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                current: 1,
                pageSize: 10,
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
                return row[col.name[0]]
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