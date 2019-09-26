import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //主页
      path: '/',
      name: 'home',
      component: Home
    },
    {
      //课程列表
      path: '/hellomelody/:name/:lesson',
      name: 'hellomelody',
      component: () => import('./views/Hellomelody.vue')
    },
    {
      //视频播放
      path:'/lessonvideo/:path',
      name:'lessonvideo',
      component:()=>import('./views/Video.vue')
    }
  ]
})
