import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StarNotes',
    component: () => import('@/views/StarNotes.vue'),
    meta: {
      title: '星辰笔记'
    }
  },
  {
    path: '/StarBanner',
    name: 'StarBanner',
    component: () => import('@/views/StarBanner.vue'),
    meta: {
      title: '欢迎'
    }
  },
  {
    path: '/StarLogin',
    name: 'StarLogin',
    component: () => import('@/views/StarLogin.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/StarRegister',
    name: 'StarRegister',
    component: () => import('@/views/StarRegister.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/NoteClass',
    name: 'NoteClass',
    component: () => import('@/views/NoteClass.vue'),
    meta: {
      title: '笔记分类'
    }
  },
  {
    path: '/NoteList',
    name: 'NoteList',
    component: () => import('@/views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  },
  {
    path: '/NoteDetail',
    name: 'NoteDetail',
    component: () => import('@/views/NoteDetail.vue'),
    meta: {
      title: '笔记详情'
    }
  },
  {
    path: '/AddNote',
    name: 'AddNote',
    component: () => import('@/views/AddNote.vue'),
    meta: {
      title: '写笔记'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
