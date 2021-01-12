<template>
    <!--用于文章详情的目录组件，根据标题生成目录-->
    <div class="article-catalog">
        <blog-anchor :data="titles" :click="jump"/>
    </div>
</template>

<script>
    import BlogAnchor from "./base/BlogAnchor/BlogAnchor";

    import {getCatalog} from "../assets/js/utils";
    import $ from 'jquery';

    export default {
        name: "ArticleCatalog",
        components: {
            BlogAnchor
        },
        data() {
          return {
              titles: []
          }
        },
        methods: {
            jump: function (id) {
                let offset = $(document.getElementById(id)).offset().top - 64;
                $('html, body').animate({scrollTop: offset}, 300);
            }
        },
        mounted() {
            // 生成目录
            this.titles = getCatalog();
        }
    }
</script>

<style scoped>

</style>