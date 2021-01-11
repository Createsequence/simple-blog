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

    // 跳转到文章详情
    linkToArticleDetails: function (id) {
        router.push({
            path: '/home/details',
            query: {id: id}
        })
    },

    // 跳转到文章编辑
    linkToArticleEdit: function (id) {
        router.push({
            path: '/admin/articleEdit',
            query: {id: id}
        })
    },

    // 逻辑删除文章
    remove: function (id) {
        vue.$notification.success({
            message: '成功',
            description: '文章已移入回收站'
        })
        changeArticleStatus(id, '0');
    },

    // 物理删除
    delete: function (id) {

    }
};

export default common;