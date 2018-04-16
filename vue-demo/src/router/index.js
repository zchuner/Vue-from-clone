import Vue from 'vue'
import Router from 'vue-router'

// import home from '../components/home'
import Detail from '../components/goodsDetail'
import Msg from '../components/msg'

Vue.use(Router)
const routes=[
  {
      path: '/',
      component : resolve =>require(['../components/home'],resolve),
      meta:{
        title:'home'
      }

    },
    {
      path:'/msg',
      component:Msg
    },
    {
      path:'/detail',
      component:Detail,
      children:[
        {
          path:'msg',
      component:Msg
        }
      ]
    }

]
export default new Router({
  routes
})
