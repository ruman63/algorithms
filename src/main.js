import Vue from 'vue'
import VueRouter from 'vue-router'
import VueWorker from 'vue-worker'
import App from './App.vue'
import routes from './routes'
Vue.use(VueWorker);
Vue.use(VueRouter);

Array.prototype.swap = function(i, j) {
  var item = this[i];
  this[i] = this[j];
  this[j] = item;
  return this;
}

Array.random = n => (new Array(n)).fill(0).map(() => Math.round(Math.random()*1000)%1000 + 1 );

Array.prototype.sum = function( callback = (item) => item) {
  let sum = 0;
  this.forEach( item => sum+=callback(item));
  return sum;
}

Array.prototype.average = function( callback = (item) => item) {
  return this.length ? this.sum(callback) / this.length : 0;
}

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
