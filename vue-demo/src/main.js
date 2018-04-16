// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import router from './router/index'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data(){
  	return{

  	}
  },
  router
  
})
Vue.filter('dCurrency',function(){
	return '￥'+value
})
Vue.filter('dTofixed',function(){
	var value=Math.round(isNum*100)/100;
	var item=value.toString().split(".");
	if(item.length==1){
		value=value.toString()+".00";
		return value;
	}
	if(value.length>1){
		if(item[1].length<2){
			value=value.toString()+"0";
		}
		return value;
	}
})
