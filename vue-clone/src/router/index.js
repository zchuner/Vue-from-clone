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



