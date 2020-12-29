<template>
    <div class="catalog">
<!--        <div class="catalog-title">目录</div>-->
        <div class="catalog-content">

            <div v-for="t in this.titles">
                <div class="h1">
                    <a class="catalog-link" @click="jump(t.t1)">{{t.t1}}</a>
                </div>
                <div class="h2" v-for="t2 in t.t2">
                    <a class="catalog-link" @click="jump(t2)">{{t2}}</a>
                </div>
            </div>

            <!--<a-anchor>
                <a-anchor-link v-for="t in titles" @click="jump(t.t1)" :href="'#' + t.t1" :title="t.t1">
                    <a-anchor-link v-for="t2 in t.t2" @click="jump(t2)"  :href="'#' + t2" :title="t2" />
                </a-anchor-link>
            </a-anchor>-->

        </div>
    </div>
</template>

<script>
    import {getCatalog} from "../assets/js/utils";
    import $ from 'jquery';

    export default {
        name: "Catalog",
        data() {
          return {
              titles: []
          }
        },
        methods: {
            jump: function (id) {
                console.log(id);
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

<style lang="less">
    .catalog {
        text-align: left;
        padding: 0 40px;
        .catalog-title {
            font-size: var(--h3);
            text-align: center;
            font-weight: bold;
        }
        .h2 {
            padding-left: 20px;
        }
    }
</style>