<template>
    <!--锚点组件，允许传入一个格式为{id:'xx',name:'xx',childes:[]}的对象的数组，并且将click事件以参数形式传入。目前只支持两层-->
    <div class="blog-anchor">
        <div class="anchor-title">
            <slot name="title"></slot>
        </div>
        <slot></slot>
        <blog-anchor-item v-if="data.length > 0"
                          v-for="(t,i1) in data"
                          :id="i1"
                          :click="click"
                          :click-value="t[chickProperty]"
                          :text="t[showProperty]">
            <blog-anchor-item slot="items"
                              v-if="t[childProperty].length > 0"
                              v-for="(t2,i2) in t[childProperty]"
                              :id="i1 + '_' + i2"
                              :click="click"
                              :click-value="t2[chickProperty]"
                              :text="t2[showProperty]"
            />
        </blog-anchor-item>
    </div>
</template>

<script>
    import $ from 'jquery'
    import BlogAnchorItem from "./BlogAnchorItem";

    export default {
        name: "BlogAnchor",
        components: {
            BlogAnchorItem
        },
        props: {
            data: {
                type: Array,
                default: () => []
            },
            // 要遍历的子集合对应的属性
            childProperty: {
                type: String,
                default: 'childes'
            },
            // 要传入点击方法的属性
            chickProperty: {
                type: String,
                default: 'id'
            },
            // 要展示的属性
            showProperty: {
                type: String,
                default: 'name'
            },
            // 按钮的点击事件
            click: {
                type: Function,
                default: function (t) {
                    console.log('传入值: ' + t);
                }
            },
            // 点击后是否切换样式为已选择
            markSelected: {
                type: Boolean,
                default: true
            },
            // 默认选中第几项
            defaultSelected: {
                type: Number,
                default: 0
            }
        },
        mounted() {
            if (!this.markSelected) {
                return;
            }
            $('.blog-anchor').find('a').each(function (index, ele) {
                // 默认选中
                if (index === 0) {
                    $(ele).addClass('selected');
                }
                // 添加点击后变色事件
                ele.addEventListener("click",function () {
                    $('a').removeClass('selected');
                    $(ele).addClass('selected');
                });
            });
        }
    }
</script>

<style lang="less">
    .blog-anchor {
        text-align: left;
        padding: 0 40px;

        .anchor-title {
            text-align: center;
            font-weight: bold;
            padding-bottom: 10px;
        }

        a {
            display: block;
            padding: 1px 5px;
        }

        a:hover {
            background-color: var(--my-cyan);
            color: var(--my-white);
            border-radius: 2px;
        }

        .anchor-item .anchor-item a {
            padding-left: 20px;
        }
    }

    .selected {
        background-color: var(--my-cyan);
        color: var(--my-white);
        border-radius: 2px;
    }
</style>