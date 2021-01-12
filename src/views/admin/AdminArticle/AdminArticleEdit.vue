<template>
    <!--文章编辑页面-->
    <div class="admin-article-edit">

        <a-input placeholder="请输入标题" size="large" v-model="article.title"/>
        <br><br>

        <mavon-editor class="editor"
                      :toolbars="editorOption"
                      :defaultOpen="'edit'"
                      :subfield="false"
                      @save="saveTemplate"
                      boxShadowStyle="none"
                      v-model="article.content"/>

        <a-divider orientation="right">文章设置</a-divider>

        <a-row class="group">
            <a-col :sm="{span: 2}" class="group-title">分类:</a-col>
            <a-col :sm="{span: 22}">
                <a-checkbox-group v-model="article.categories">
                    <a-checkbox v-for="c in categories"
                                :value="c.id">
                        {{c.name}}
                    </a-checkbox>
                </a-checkbox-group>
            </a-col>
        </a-row>

        <a-row class="group">
            <a-col :sm="{span: 2}" class="group-title">标签:</a-col>
            <a-col :sm="{span: 22}">
                <a-select mode="tags"
                          allowClear
                          style="width: 100%"
                          placeholder="点击选择标签"
                          @select="addTag"
                >
                    <a-select-option v-for="tag in tags" :value="tag.id">
                        {{ tag.name }}
                    </a-select-option>
                </a-select>
            </a-col>
        </a-row>

        <a-row class="group">
            <a-col :sm="{span: 2}" class="group-title">摘要:</a-col>
            <a-col :sm="{span: 22}">
                <a-textarea placeholder="若不填写，则根据设置默认生成摘要" :rows="4" @change="subAbstract" v-model="article.abstract"/>
            </a-col>
        </a-row>

        <a-divider orientation="right">发布设置</a-divider>

        <a-row class="group">
            <a-col :sm="{span: 2}" class="group-title">是否发布:</a-col>
            <a-col :sm="{span: 22}">
                <a-radio-group v-model="article.status" default-value="1" button-style="solid">
                    <a-radio-button value="1">
                        发布
                    </a-radio-button>
                    <a-radio-button value="0">
                        不发布
                    </a-radio-button>
                </a-radio-group>
            </a-col>
        </a-row>

        <a-row class="group">
            <a-col :sm="{span: 2}" class="group-title">访问密码:</a-col>
            <a-col :sm="{span: 22}">
                <a-input placeholder="请输入访问密码" />
            </a-col>
        </a-row>

        <a-row class="group">
            <br>
            <a-col :sm="{span: 6, offset: 4}">
                <a-button block type="primary" size="large" @click="commit">提交</a-button>
            </a-col>
            <a-col :sm="{span: 6, offset: 2}">
                <a-button block type="dashed" size="large" @click="commit('3')">存为草稿</a-button>
            </a-col>
        </a-row>

    </div>

</template>

<script>
    import {config} from "../../../../config";
    import {categories, tags} from "../../../assets/js/FillData";
    import {storage} from "../../../assets/js/utils";

    // 编辑器设置
    const editorOption = {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: false, // 单双栏模式
        preview: true, // 预览
    }

    export default {
        name: "AdminContent",
        data() {
            return {
                categories: categories().data,
                tags: tags().data,
                article: {
                    title: '',
                    content: '',
                    categories: [],
                    abstract: '',
                    status: '1'
                },
                editorOption: editorOption
            }
        },
        methods: {
            saveTemplate(content, render) {
                this.$noticeSuccess('已保存至本地缓存');
                storage.set('blog_template_article', content);
            },
            subAbstract() {
                let limit = config.content.abstract.length;
                let abstract = this.article.abstract;
                this.article.abstract = abstract.length <= limit ? abstract : abstract.substring(0, limit);
            },
            addTag(value, option) {
                // 是否为新增选项
                for (let i = 0; i < this.tags.length; i++) {
                    if (value === this.tags[i].id) {
                        return;
                    }
                }

                option.value = '这里是新增标签的id';
                let tag = {
                    id: '这里是新增标签的id',
                    name: value
                };
                this.tags.push(tag);
                console.log("新增选项：" + value);
            },
            commit(status) {
                if (status === '3') {
                    this.$notification.info({
                        message: '提示',
                        description: '保存至草稿箱！',
                    });
                    this.article.status = status;
                }
                this.$noticeSuccess('提交成功');
                // 提交后清空本地缓存
                storage.remove('blog_template_article');
            }
        },
        mounted() {
            console.log('请求的文章id为：' + this.$route.query.id);

            let content = storage.get('blog_template_article');
            if (content !== '' && this.article.content === '') {
                this.article.content = content;
            }
        }
    }
</script>

<style lang="less">
    .admin-article-edit {

        .editor {
            height: 500px !important;
            z-index: 0 !important;
            border: 1px var(--my-gary) solid !important;
        }

        .ant-divider {
            padding-top: 2em;
            color: var(--my-gary);
        }

        .group {
            padding-bottom: 1em;
        }
    }
</style>