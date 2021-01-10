import marked from 'marked'
import art from '../post/渲染样式测试文档.md'

const content = marked(art);

// 文章列表模拟数据
export const articleList = function () {
    let articleList = {
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
        let article = {
            id: 1,
            title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
            postDate: "2020-12-23",
            content: content,
            author: 'Createsequence',
            read: 8000,
            comment: 800,
            status: '1' // 文章状态，0已删除，1发布，2未发布，3草稿
        };

        if (i % 2 === 0) {
            article.abstract = '这里是手动设置的文章摘要......';
        }

        console.log(article);
        articleList.data.push(article);
    }

    return articleList;
};

// 文章详情模拟数据
export const article = {
    id: 1,
    title: "渲染样式测试文档",
    postDate: "2020-12-23",
    content: content,
    author: 'Createsequence',
    classificationId: '1',
    classificationName: '计算机网络',
    read: 8000,
    comment: 800,
    prevId: "1",
    prev: "渲染样式测试文档(一)",
    nextId: "1",
    next: "渲染样式测试文档（二）",
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
export const categories = function () {
    let categories = [
        {
            id: '1',
            name: "计算机网络",
            count: 20
        },
        {
            id: '2',
            name: "数据结构与算法",
            count: 14
        },
        {
            id: '3',
            name: "Docker",
            count: 2
        },
        {
            id: '4',
            name: "Mysql",
            count: 3
        },
        {
            id: '5',
            name: "组成原理",
            count: 9
        },
    ];
    return categories;
};

// 文章标签模拟数据
export const tags = function () {
    let archives = [
        {
            id: '1',
            name: "计算机网络",
            count: 20
        },
        {
            id: '2',
            name: "数据结构与算法",
            count: 14
        },
        {
            id: '3',
            name: "Docker",
            count: 2
        },
        {
            id: '4',
            name: "Mysql",
            count: 3
        },
        {
            id: '5',
            name: "组成原理",
            count: 9
        },
        {
            id: '6',
            name: "集合容器",
            count: 9
        },
        {
            id: '7',
            name: "代码优化",
            count: 9
        },
        {
            id: '8',
            name: "工作见闻",
            count: 9
        },
    ];
    return archives;
};

// 文章归档模拟数据
export const articleArchivesList = function () {
    let articleArchivesList = {
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
        let articleArchives = {
            postDate: "2020-12",
            articles: [
                {
                    id: 1,
                    title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
                    postDate: "2020-12-23"
                },
            ]
        };

        for (let j = 0; j < i; j++) {
            let article = {
                id: 1,
                title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
                postDate: "2020-12-23"
            };
            articleArchives.articles.push(article);
        }

        articleArchivesList.data.push(articleArchives);
    }
    return articleArchivesList;
};

// 文章分类模拟数据
export const articleCatalog = function () {
    let articleArchivesList = {
        // 总页数
        total: 50,
        // 当前页数
        pageNum: 1,
        // 每页条数
        pageSize: 10,
        // 数据
        data: []
    };

    let articleArchives = {
        postDate: "",
        articles: []
    };
    for (let i = 0; i < 10; i++) {
        let article = {
            id: 1,
            title: "《趣谈网络协议》读书笔记（一）：网络分层，IP与MAC",
            postDate: "2020-12-23"
        };
        articleArchives.articles.push(article);
    }
    articleArchivesList.data.push(articleArchives);

    return articleArchivesList;

};