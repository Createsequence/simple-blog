import marked from 'marked'
import art from '../post/《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC.md'
const content = marked(art);

// 文章列表模拟数据
export const posts = [
    {
        id: 1,
        title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
        postDate: "2020-12-23",
        content: content,
        author: 'Createsequence',
        classificationId: '1',
        classificationName: '计算机网络',
        read: 8000,
        comment: 800
    },
    {
        id: 1,
        title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
        postDate: "2020-12-23",
        content: content,
        author: 'Createsequence',
        classificationId: '1',
        classificationName: '计算机网络',
        read: 8000,
        comment: 800
    },
    {
        id: 1,
        title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
        postDate: "2020-12-23",
        content: content,
        author: 'Createsequence',
        classificationId: '1',
        classificationName: '计算机网络',
        read: 8000,
        comment: 800
    },
    {
        id: 1,
        title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
        postDate: "2020-12-23",
        content: content,
        author: 'Createsequence',
        classificationId: '1',
        classificationName: '计算机网络',
        read: 8000,
        comment: 800
    },
    {
        id: 1,
        title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
        postDate: "2020-12-23",
        content: content,
        author: 'Createsequence',
        classificationId: '1',
        classificationName: '计算机网络',
        read: 8000,
        comment: 800
    },
    {
        id: 1,
        title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
        postDate: "2020-12-23",
        content: content,
        author: 'Createsequence',
        classificationId: '1',
        classificationName: '计算机网络',
        read: 8000,
        comment: 800
    },
    {
        id: 1,
        title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
        postDate: "2020-12-23",
        content: content,
        author: 'Createsequence',
        classificationId: '1',
        classificationName: '计算机网络',
        read: 8000,
        comment: 800
    }
];

// 文章分类模拟数据
export const classification = [
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
        name: "java相关"
    },
    {
        id: "4",
        name: "源码分析"
    },
    {
        id: "5",
        name: "Mysql"
    },
];
