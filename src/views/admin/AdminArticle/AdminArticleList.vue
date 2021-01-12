<template>
    <!--文章管理页面-->
    <div class="admin-article-list">

        <blog-table :data="articleList">

            <div slot="head">
                <blog-table-tr>
                    <blog-table-td v-for="c in columns" :span="c.span" :html="c.title" :align="c.align"/>

                    <blog-table-td span="3" html="发布状态"/>
                    <blog-table-td span="3" html="操作"/>
                </blog-table-tr>
            </div>

            <div slot="body">
                <blog-table-tr v-for="a in articleList.data" >
                    <blog-table-td v-for="c in columns" :span="c.span" :align="c.align">
                        <a href="javaScript:void(0)" @click="details(a.id)">{{a[c.name]}}</a>
                    </blog-table-td>

                    <blog-table-td span="3" v-text="a.status === '1' ? '已发布' : '未发布'" />
                    <blog-table-td span="3">
                        <a href="javaScript:void(0)" @click="edit(a.id)">编辑</a> |
                        <a href="javaScript:void(0)">删除</a>
                    </blog-table-td>
                </blog-table-tr>
            </div>

        </blog-table>

    </div>
</template>

<script>
    import {articleList} from "../../../assets/js/FillData";
    import BlogTable from "../../../components/base/BlogTable/BlogTable";

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
        },
        methods: {
            details(id) {
                this.$common.linkToArticleDetails(id);
            },
            edit(id) {
                this.$common.linkToArticleEdit(id)
            }
        },
        mounted() {
            let tagId = this.$route.query.tagId;
            let categoriseId = this.$route.query.categoriseId;
            if (this.$util.isNotEmpty(tagId)) {
                console.log('请求标签id为' + tagId + '的文章列表');
            }else if (this.$util.isNotEmpty(categoriseId)) {
                console.log('请求分类id为' + categoriseId + '的文章列表');
            } else {
                console.log('请求文章列表');
            }
        }
    }
</script>

<style scoped>
</style>