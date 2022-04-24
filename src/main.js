//导入Vue的包
import Vue from 'vue'
//导入App.vue根组件，将来要把App.vue中的模板结构，渲染到HTML页面中
import App from './App.vue'
// import App from './test.vue'
// import Public from '@/components/public.vue'
// Vue.component('Public',Public);

Vue.config.productionTip = false

new Vue({
  // 如果这里不指定区域，就在最后面添加.mount('#app')
  // el:'#app',
  //把render函数指定的组件，渲染到HTML中
  render: h => h(App),
}).$mount('#app')
