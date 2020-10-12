import { createRouter, createWebHashHistory, /* createWebHistory */ } from 'vue-router'
import Home from '../views/Home/index.vue'
import TodoList from '../views/TodoList/index.vue'

export default createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: Home // { template: '<div>About</div>' }
    },
    {
      path: '/todo-list',
      component: TodoList
    },
  ]
})