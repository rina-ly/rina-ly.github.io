import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/Common'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Common,
      children: [
        {
          path: '',
          name: 'Main',
          component: Main
        }
      ]
    }
  ],
  scrollBehavior (to, from, savePosition) {
    // ページ内リンクの有効化
    if (savePosition) {
      return savePosition
    }
    if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 100 } }
    }
    return { top: 0 }
  }
})
