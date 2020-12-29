<template>
    <a-layout-content id="content" class="content">
        <a-row>

            <!--左侧栏-->
            <a-col :xs="{ span: 0 }" :sm="{ span: 5, offset: 1 }">
                <a-row id="side-left" class="side-left">
                    <Catalog/>
                </a-row>
            </a-col>

            <!--右侧栏-->
            <a-col :xs="{ span: 20, offset: 2 }" :sm="{ span: 14, offset: 1 }" id="side-right" class="side-right">
                <Article/>
            </a-col>

        </a-row>
    </a-layout-content>
</template>

<script>
    import Article from "../components/Article";
    import Catalog from "../components/Catalog";

    // 引入jquery
    import $ from 'jquery'
    window.jQuery = $;
    require('../assets/js/plugins/portamento.js');
    import {generateCatalog} from "../assets/js/utils";

    export default {
        name: "Details",
        components: {
            Article,
            Catalog
        },
        data() {
          return {
              titles: []
          }
        },
        mounted() {
            this.$nextTick(function () {
                generateCatalog();
            })
        },
        updated() {
            generateCatalog();
        }
    }
</script>

<style lang="less">
    .side-left {
        border-right: 1px var(--my-gary) solid;
        text-align: center;
        overflow:auto;
        padding-bottom: 10px;
    }

    #portamento_container {
        .side-left {
            position: fixed;
        }
    }
</style>