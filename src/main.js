import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// 引入主css
import './assets/css/main.less';
import './assets/css/index.less';

// 引入ant
import {Button, Layout, Input, Row, Col, Menu, Divider, Pagination, BackTop, Icon, Drawer} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Layout);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Divider);
Vue.use(Pagination);
Vue.use(BackTop);
Vue.use(Icon);
Vue.use(Drawer);

// 引入less
import less from 'less'
Vue.use(less);

//引入代码高亮(默认高亮所有code，需要修改index.js中选择器为pre code)
import 'highlight.js/styles/darcula.css';
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
