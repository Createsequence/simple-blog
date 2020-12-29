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
        title.t2 = [];
        title.t1 = t.innerText;
        t.id = t.innerText;

        // 将两个H2之间的H3节点装入H2
        while (i + 1 < len && titleNodes[i + 1].nodeName === "H3") {
            let t2 = titleNodes[++i];
            title.t2.push(t2.innerText);
            t2.id = t2.innerText;
        }
        titles.push(title);
    }

    return titles;
};

/**
 * 设置固定位置的浮动侧边栏，只能使用在Details页面与Content页面里
 */
export let generateCatalog = () => {
    // 默认返回顶部
    $(window).scrollTop(0);

    let content = $('.content');
    let sideRight = $('.side-right');
    let sideLeft = $('.side-left');
    // 计算位置
    let width = ($(content).width() - $(sideRight).width()) / 2;
    let height = $(window).height() - (64 * 2);
    let footerHeight = $('#foot').innerHeight();
    $(sideLeft).css({'width': width, 'height': height - footerHeight, 'margin-top': -footerHeight});
    let gap = $(window).height() - $(sideLeft).height();

    // 设置浮动
    $(sideLeft).portamento({
        gap: gap,
        wrapper: $('#app')
    });
};