import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// 引入主css
import './assets/css/main.css';
import './assets/css/index.css';

// 引入ant
import { Button, Layout, Input, Row, Col, Menu, Card } from 'ant-design-vue'
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

// 引入less
import less from 'less'
Vue.use(less);

//引入代码高亮
import 'highlight.js/styles/darcula.css'; //引入代码高亮的css
import highlight from 'highlight.js';
//自定义highlightCode方法，将只执行一次的逻辑去掉
highlight.highlightCode = function () {
  let blocks = document.querySelectorAll('pre code');
  [].forEach.call(blocks, highlight.highlightBlock);
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
