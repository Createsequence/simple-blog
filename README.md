## 概述

简单博客2.0，基于简单博客的基础上进行重构与扩展的一套前后端分离的博客系统。

前端包括管理前台与展示前台，基于 Vue 与 ant-design-vue。

后端为基于 SpringBoot + Mysql  的 Restful 接口服务器。使用 Shrio 作为权限管理工具，并且使用 Redis 实现缓存。

[前台静态页面预览](http://xiajibagao.top/#/home/content)

[后台静态页面预览](http://xiajibagao.top/#/admin/articleList)

## 一、计划概览

### 1.博客前台前端计划

需求模块：

- [x] 个人信息
- [x] 文章列表
- [x] 文章分类
- [x] 文章详情
- [x] 搜索
- [x] 关于
- [ ] 评论
- [ ] 移动端适配

### 2.博客后台前端计划

- [x] 用户登录
- [ ] 设置管理
- [x] 文章管理
- [x] 标签管理
- [ ] 评论管理

### 3.博客后端计划

- [ ] 用户管理模块
- [ ] 文章管理模块
- [ ] 关键字管理模块
- [ ] 目录管理模块
- [ ] 评论管理模块

## 二、安装使用

~~~
npm install
npm run serve
npm run build
~~~

