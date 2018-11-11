import Vue from "vue";
import Router from "vue-router";
import routes from './routes';
Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('jwt') === null){
      next({
        path: '/',
        params: {nextUrl: to.fullPath}
      })
    }else{
      let user = JSON.parse(localStorage.getItem('user'))
      next()
    }
  }else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
      next()
    }
    else{
        next({ name: 'home'})
    }
  }else {
    next() 
  }
});

export default router;