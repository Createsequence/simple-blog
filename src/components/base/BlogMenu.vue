<template>
    <!--菜单-->
    <div class="blog-menu">

        <a-row>
            <!--大屏幕显示水平菜单栏-->
            <a-col :xs="{ span: 0 }" :sm="{ span: 24 }">
                <a-menu :mode="horizontal" class="menu" :defaultSelectedKeys="['menu::0']">
                    <a-menu-item v-for="(menu, index) in data" :key="'menu::' + index" class="menuItem" @click="link(menu.path)" >
                        {{menu.name}}
                    </a-menu-item>
                </a-menu>
            </a-col>

            <!--小屏幕显示抽屉-->
            <a-col :xs="{ span: 24 }" :sm="{ span: 0 }">
                <a-button type="link" @click="changeVisible">
                    <a-icon type="unordered-list" />
                </a-button>
            </a-col>
        </a-row>


        <!--小屏幕展示抽屉-->
        <a-drawer :placement="placement"
                  :closable="false"
                  :visible="visible"
                  @close="changeVisible"
        >
            <a-menu class="menu" :defaultSelectedKeys="['0']">
                <a-menu-item v-for="(menu, index) in data" :key="index" class="menuItem" @click="link(menu.path)" >
                    {{menu.name}}
                </a-menu-item>
            </a-menu>
        </a-drawer>

    </div>
</template>

<script>
    export default {
        name: "BlogMenu",
        props: {
            data: Array,
            horizontal: String
        },
        data() {
            return {
                visible: false,
                placement: 'top',
            }
        },
        methods: {
            link(path) {
                this.$router.push({
                    path: path,
                })
            },
            changeVisible() {
                this.visible = !this.visible;
            }
        }
    }
</script>

<style lang="less">
    .menu {
        background-color: var(--my-white);
        font-size: var(--h4);
        line-height: var(--menu-height);
    }
</style>