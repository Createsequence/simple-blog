<template>
    <!--锚点，允许传入一个格式为{id:'xx',name:'xx',childes:[]}的对象的数组，并且将click事件以参数形式传入-->
    <div class="blog-anchor">
        <div class="anchor-title">
            <div slot="title"></div>
        </div>
        <div v-for="t in data">
            <div>
                <a @click="click(t[chickProperty])">{{t[showProperty]}}</a>
            </div>
            <div class="anchor-item" v-for="t2 in t[childProperty]">
                <a @click="click(t2[chickProperty])">{{t2[showProperty]}}</a>
            </div>
        </div>
    </div>
</template>

<script>
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
            }
        }
    }
</script>

<style lang="less">
    .blog-anchor {
        text-align: left;
        padding: 0 40px;

        .anchor-title {
            font-size: var(--h3);
            text-align: center;
            font-weight: bold;
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
</style>