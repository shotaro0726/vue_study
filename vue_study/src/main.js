import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber'

Vue.config.productionTip = false

//グローバル登録
Vue.component('LikeNumber', LikeNumber);
// Vue.component("border",(el,binding) => {
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if (binding.modifiers.round) {
//     el.style.borderRadius = "0.5rem";
//   }

//   if (binding.modifiers.round.shadow) {
//     el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)";
//   }
// });

Vue.filter("upperCase", (value) => {
  return value.toUpperCase();
});

// Vue.mixin({
//   created() {
//     console.log("global mixin");
//   }
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
