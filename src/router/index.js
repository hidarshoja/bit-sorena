import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { showInvitation: true },
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/friends',
      name: 'Friends',
      component: () => import('../views/FriendsView.vue')
    }
    ,
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/MoreView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { showInvitation: false },
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/QuestionsView',
      name: 'QuestionsView',
      component: () => import('../views/QuestionsView.vue')
    },
    {
      path: '/RulesView',
      name: 'RulesView',
      component: () => import('../views/RulesView.vue')
    },
    {
      path: '/HelpView',
      name: 'HelpView',
      component: () => import('../views/HelpView.vue')
    }
    ,
    {
      path: '/ForgotPasswordView',
      name: 'ForgotPasswordView',
      component: () => import('../views/ForgotPasswordView.vue')
    } ,
    {
      path: '/GetCodeView',
      name: 'GetCodeView',
      component: () => import('../views/GetCodeView.vue')
    },
    {
      path: '/blog/BlogPageView',
      name: 'BlogPageView',
      component: () => import('../views/BlogPageView.vue')
    },
    {
      path: '/PriceTableView',
      name: 'PriceTableView',
      component: () => import('../views/PriceTableView.vue')
    }
    ,
    {
      path: '/:pathMatch(.*)',
      name: 'ErrorView',
      component: () => import('../views/ErrorView.vue'),
  },
  {
    path: '/AboutUsView',
    name: 'AboutUsView',
    component: () => import('../views/AboutUsView.vue')
  },
  {
    path: '/IncomeView',
    name: 'IncomeView',
    component: () => import('../views/IncomeView.vue')
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    
    if (savedPosition) {
      return savedPosition;
    } else {
     
      return { top: 0, behavior: 'smooth' };
    }},
})

export default router
