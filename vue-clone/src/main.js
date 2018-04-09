// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import food from 'components/food'
import list from 'components/list'
import button from 'components/button'

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import button from '@/components/button'
import list from '@/components/list'
import home from '@/components/home'
import food from '@/components/food'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      // name: 'App',
      component: button,
      children:[],
      befofreEnter(to,from,next){
      	if(store.state.userInfo.user){
      		next({path:'/home'});
      	}else{
      		next();
      	}
      }
    },
    {
    	path:'/list',
    	namr:'list',
    	component:list,
    	meta:{
    		requireAuth:true
    	}
    },
    {
    	path:'/button',
    	component:button
    },
    {
    	path:'/food',
    	component:food
    }
  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App ,food,list,button},
  template: '<App/>'
})

