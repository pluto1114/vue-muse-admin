import Vue from 'vue'
import Router from 'vue-router'

import MainView from '@/views/Main.vue'
import LoginView from '@/views/Login.vue'
import NotFoundView from '@/views/404.vue'

import DashboardView from '@/views/dash/Dashboard.vue'
import StoreGoodsView from '@/views/dash/onstore/StoreGoods.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/login',
        component: LoginView
    },{
        path: '/',
        component: MainView,
        auth: true,
        children: [
	      	{
                path: '',
                component: DashboardView,
                name: 'dashboard'
            },{
	        	path: 'storeGoods',
	        	component: StoreGoodsView,
	        	name: 'storeGoods'
	      	}
	    ]
    },
    { path: '*', redirect: '/' }
  ]
})
