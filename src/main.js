import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// 引入主css
import './assets/css/main.less';
import './assets/css/index.less';

// 引入ant
import {Button, Layout, Input, Row, Col, Menu, Divider, Pagination, BackTop, Icon, Drawer, Checkbox, Radio, Select, Switch, Table, notification} from 'ant-design-vue';
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
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Table);

Vue.prototype.$notification = notification;
// 配置提醒框
notification.config({
  placement: 'bottomRight',
  bottom: '50px',
  duration: 1.5,
});

// 引入less
import less from 'less'
Vue.use(less);

//引入代码高亮(默认高亮所有code，需要修改index.js中选择器为pre code)
import 'highlight.js/styles/darcula.css';
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS);

// 引入工具类
import {util} from "./assets/js/utils";
Vue.prototype.$util = util;

// 引入mavonEditor编辑器
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
