import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// ======================== 引入插件与依赖 ==============================
// 引入less
import less from 'less'
Vue.use(less);

//引入代码高亮(默认高亮所有code，需要修改index.js中选择器为pre code)
import 'highlight.js/styles/darcula.css';
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS);

// 引入mavonEditor编辑器
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

// ======================== 引入主css ==============================

import './assets/css/main.less';
import './assets/css/index.less';

// ======================== 引入ant ==============================

import {
  Button,
  Layout,
  Input,
  Row,
  Col,
  Menu,
  Divider,
  Pagination,
  BackTop,
  Icon,
  Drawer,
  Checkbox,
  Radio,
  Select,
  Switch,
  notification,
  popconfirm,
  Result
} from 'ant-design-vue';

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
Vue.use(popconfirm);
Vue.use(Result);


// ======================== 属性与插件配置 ==============================

// 配置提醒框
Vue.prototype.$notification = notification;
notification.config({
  placement: 'topRight',
  top: '75px',
  duration: 1.5,
});

Vue.prototype.$noticeSuccess = function (msg) {
  notification.success({
    message: '成功',
    description: msg,
  });
};

Vue.prototype.$noticeInfo = function (msg) {
  notification.info({
    message: '提醒',
    description: msg,
  });
};

Vue.prototype.$noticeWaring = function (msg) {
  notification.warning({
    message: '警告',
    description: msg,
  });
};

Vue.prototype.$noticeError = function (msg) {
  notification.error({
    message: '错误',
    description: msg,
  });
};

// 引入工具类
import {util} from "./assets/js/utils";
Vue.prototype.$util = util;

// 引入博客配置文件
import {config} from "../config";
Vue.prototype.$config = config;

// 引入常量类
import common from "./assets/js/common";
Vue.prototype.$common = common;

// ======================== Vue ==============================

let vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

export default vue;
