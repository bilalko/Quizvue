import Vue from 'vue'
import Router from 'vue-router'
import Quiz1 from '@/components/Quiz1'
import Quiz2 from '@/components/Quiz2'
import Quiz3 from '@/components/Quiz3'
import Quiz4 from '@/components/Quiz4'
import ResultatQuiz from '@/components/ResultatQuiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz1',
      component: Quiz1
    },
    {
      path: '/Quiz2',
      name: 'Quiz2',
      component: Quiz2
    },
    {
      path: '/Quiz3',
      name: 'Quiz3',
      component: Quiz3
    },
    {
      path: '/Quiz4',
      name: 'Quiz4',
      component: Quiz4
    },
    {
      path: '/ResultatQuiz',
      name: 'ResultatQuiz',
      component: ResultatQuiz
    }
  ]
})
