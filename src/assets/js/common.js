/**
 * 通用操作工具类
 */

import router from "../../router";
import vue from "../../main";

/**
 * 改变文章状态
 *
 * @param {String} id
 * @param {String} status
 */
function changeArticleStatus(id, status) {
    console.log('改变了id为' + id + '的文章状态为 ' + status);
}


let common = {
    // 返回首页
    linkToHome: function () {
        router.push('/');
    },

    // 跳转到文章详情
    linkToArticleDetails: function (articleId) {
        router.push({
            path: '/home/details',
            query: {id: articleId}
        })
    },

    // 跳转到文章编辑
    linkToArticleEdit: function (articleId) {
        router.push({
            path: '/admin/articleEdit',
            query: {id: articleId}
        })
    },

    // 根据标签跳转到文章管理列表
    linkToArticleListByTag: function (tagId) {
        router.push({
            path: '/admin/articleList',
            query: {tagId: tagId}
        })
    },

    // 根据分类跳转到文章管理列表
    linkToArticleListByCategories: function (categoriseId) {
        router.push({
            path: '/admin/articleList',
            query: {categoriseId: categoriseId}
        })
    },

    // 逻辑删除文章
    remove: function (id) {
        vue.$notification.success({
            message: '成功',
            description: '文章已移入回收站'
        });
        changeArticleStatus(id, '0');
    },

    // 物理删除
    delete: function (id) {
        console.log("物理删除成功！")
    }
};

export default common;