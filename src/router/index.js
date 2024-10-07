import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录',
      needLogin: false
    }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { needLogin: true },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫 - 登录拦截
router.beforeEach((to, from, next) => {
  // const token = store.state.user.token; // 表示用户登录的凭证
  const token = '145sdlsaslhjscbl'
  if (to.meta.needLogin) {
    if (token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
})

export default router
