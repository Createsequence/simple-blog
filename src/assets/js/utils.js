import $ from "jquery";

/**
 * 构建目录
 * @returns {[]}
 */
export const getCatalog = () => {
    let nodes = document.getElementById("post-content").childNodes;
    //获取H3和H2标题
    let titleNodes = [];
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node.nodeName === "H2" || node.nodeName === "H3") {
            titleNodes.push(node);
        }
    }

    let titles = [];
    let len = titleNodes.length;
    for (let i = 0; i < len; i++) {
        // 找到第一个H2节点
        let t = titleNodes[i];
        if (t.nodeName !== "H2"){
            continue;
        }
        let title = {};
        title.childes = [];
        title.id = t.innerText;
        title.name = t.innerText;
        t.id = t.innerText;

        // 将两个H2之间的H3节点装入H2
        while (i + 1 < len && titleNodes[i + 1].nodeName === "H3") {
            let t2 = titleNodes[++i];
            let title2 = {};
            title2.id = t2.innerText;
            title2.name = t2.innerText;
            title.childes.push(title2);
            t2.id = t2.innerText;
        }
        titles.push(title);
    }
    return titles;
};

/**
 * 设置固定位置的浮动侧边栏，只能使用在Details页面与Content页面里
 */
export let generateFixedWindow = () => {
    let headHeight = 64;
    // 默认返回顶部
    $(window).scrollTop(0);

    let content = $('.content');
    let sideRight = $('.side-right');
    let sideLeft = $('.side-left');
    let foot = $('#foot');
    let contentHeight = $(content).height();
    let windowHeight = $(window).height();

    // 浮动窗口的宽高与底边距
    let footerHeight = contentHeight <= windowHeight ? 0 : $(foot).innerHeight(); // 主内容栏过小则无需上浮
    let width = ($(content).width() - $(sideRight).width()) / (2 * 1.1);
    let height = windowHeight - (headHeight * 2) - footerHeight;
    $(sideLeft).css({'width': width, 'height': height, 'margin-top': -footerHeight});

    // 设置浮动
    $(sideLeft).portamento({
        gap: windowHeight - $(sideLeft).height(),
        wrapper: $('#app')
    });
};

/**
 * 路由跳转到文章详情页面
 */
export let linkToArticle = (that, id) => {
    that.$router.push({
        path: '/home/details',
        query: {id: id}
    })
};