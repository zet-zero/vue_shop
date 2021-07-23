import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//导入登录界面
import Login from '../components/Login.vue'
//Home首页
import Home from '../components/Home.vue'
//Welcome
import Welcome from "@/components/Welcome";
//BlogList
import BlogList from "@/components/Blog/Bloglist"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children:[
      {
        path: '/welcome',
        component: Welcome,
      },
      {
        path: '/blog/list',
        component: BlogList,
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //to将要访问
  //from从哪访问
  //next接着干什么 next(url)重定向到url上，如果为空则继续访问to的路径
  if (to.path == '/login')
    return next();
    //获取user
    const userFlag = window.sessionStorage.getItem("user");
  if (!userFlag)
    return next('/login');
  next();
})

export default router
