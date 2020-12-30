import marked from 'marked'
import art from '../post/《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC.md'

const content = marked(art);

// 文章列表模拟数据
export const posts = function () {
    let posts = {
        // 总页数
        total: 50,
        // 当前页数
        pageNum: 1,
        // 每页条数
        pageSize: 10,
        // 数据
        data: []
    };

    for (let i = 0; i < 10; i++) {
        let post = {
            id: 1,
            title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
            postDate: "2020-12-23",
            content: content,
            author: 'Createsequence',
            read: 8000,
            comment: 800
        };

        posts.data.push(post);
    }

    return posts;
};

// 文章详情模拟数据
export const article = {
    id: 1,
    title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
    postDate: "2020-12-23",
    content: content,
    author: 'Createsequence',
    classificationId: '1',
    classificationName: '计算机网络',
    read: 8000,
    comment: 800,
    prevId: "1",
    prev: "上一篇《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
    nextId: "1",
    next: "下一篇《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
    tags: [
        {
            id: "1",
            name: "计算机网络"
        },
        {
            id: "2",
            name: "数据结构与算法"
        },
        {
            id: "3",
            name: "计网"
        }
    ]
};

// 文章分类模拟数据
export const classification = function () {
    let classification = [
        {
            id: 1,
            name: "计算机网络",
            count: 20
        },
        {
            id: 2,
            name: "数据结构与算法",
            count: 14
        },
        {
            id: 3,
            name: "Docker",
            count: 2
        },
        {
            id: 4,
            name: "Mysql",
            count: 3
        },
        {
            id: 5,
            name: "组成原理",
            count: 9
        },
    ];
    for (let i = 0; i < classification.length; i++) {
        classification[i].name = classification[i].name + '（' + classification[i].count + '篇）';
    }
    return classification;
};
