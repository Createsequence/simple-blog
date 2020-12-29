import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// 引入主css
import './assets/css/main.less';
import './assets/css/index.less';

// 引入ant
import { Button, Layout, Input, Row, Col, Menu, Card, Divider, Pagination, BackTop, Anchor, Collapse } from 'ant-design-vue'
Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Input.name, Input);
Vue.component(Input.Group.name, Input.Group);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Menu.name, Menu);
Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Card.name, Menu.Item);
Vue.component(Card.Meta.name, Card.Meta);
Vue.component(Divider.name, Divider);
Vue.component(Pagination.name, Pagination);
Vue.component(BackTop.name, BackTop);
Vue.component(Anchor.name, Anchor);
Vue.component(Anchor.Link.name, Anchor.Link);
Vue.component(Collapse.name, Collapse);
Vue.component(Collapse.Panel.name, Collapse.Panel);

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
