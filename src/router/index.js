import { createRouter, createWebHistory } from 'vue-router'

import Header from '@/views/Header.vue'
import Admissions from '@/views/Admissions.vue'
import j_lesson from '@/views/j_lesson.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/',
      name:'Header',
      component: Header
    },
    {path:'/j_lesson',
      name:'JLesson',
      component: j_lesson
    },
    {path:'/admissions',
      name:'Admissions',
      component: Admissions
    },
    {path:'/about',
      name:'About',
      component: About
    }
  ]
})

export default router
