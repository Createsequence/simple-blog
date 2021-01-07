<template>
    <!--锚点，允许传入一个格式为{id:'xx',name:'xx',childes:[]}的对象的数组，并且将click事件以参数形式传入-->
    <div class="blog-anchor">
        <div class="anchor-title">
            <slot name="title"></slot>
        </div>
        <div @click="selected()">
            <slot name="item"></slot>
        </div>
        <div v-for="(t,i1) in data" class="anchor-items">
            <div>
                <a :id="i1" @click="click(t[chickProperty]); selected(i1)">{{t[showProperty]}}</a>
            </div>
            <div class="anchor-item" v-for="(t2,i2) in t[childProperty]">
                <a :id="i1 + '_' + i2" @click="click(t2[chickProperty]); selected(i1 + '_' + i2)">{{t2[showProperty]}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "BlogAnchor",
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
            // 点击后是否切换样式已选择
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
        methods: {
            // 点击后变色
            selected(eleId) {
                if (!this.markSelected) {
                    return;
                }
                $('a').removeClass('selected');
                if (eleId || eleId === 0) {
                    $('#' + eleId).addClass('selected');
                }
            }
        },
        mounted() {
            if (!this.markSelected) {
                return;
            }
            this.selected(document.getElementsByTagName('a')[this.defaultSelected].id);
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

        .anchor-item {
            padding-left: 20px;
        }
    }

    .selected {
        background-color: var(--my-cyan);
        color: var(--my-white);
        border-radius: 2px;
    }
</style>