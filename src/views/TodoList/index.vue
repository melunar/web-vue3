<style scoped>
/* .todo-list{
  text-align: center;
} */

ul li {
  list-style: none;
  text-align: left;
}
</style>
<template>
  <div class="todo-list">
    <h2>{{header}}（{{userName}}）add {{addCount}}</h2>
    <label>新增待办</label>
    <input v-model="newTodo" @keyup.enter="handleAddTodo">
  </div>
  <div>
    <h3>待办列表({{todos.length}})</h3>
    <ul>
      <li v-for="item in todos" :key="item.id" @click="handleChangeStatus(item, true)">
        <input type="checkbox">
        <label>{{item.text}}</label>
      </li>
    </ul>
  </div>
  <div><h3>已办列表({{dones && dones.length}})</h3></div>
  <ul>
    <li v-for="item in dones" :key="item.id" @click="handleChangeStatus(item, false)">
      <input type="checkbox" checked>
      <label>{{item.text}}</label>
    </li>
  </ul>
</template>

<script lang="ts">
type Todo = {
  id: any,
  done: boolean,
  text: string
}

import { reactive, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  // setup相当于vue2.0的 beforeCreate和 created，是vue3新增的一个属性，所有的操作都在此属性中完成
  setup(props, context) {
    const route = useRoute()
    const store = useStore()

    const todoList = reactive<Todo[]>([
      { id: 1, done: false, text: 'eat' },
      { id: 2, done: false, text: 'sleep' },
      { id: 3, done: false, text: 'beat bean-bean' },
      { id: 4, done: false, text: 'over' },
    ])
    const newTodo = ref<string>('')
    const header = ref<string>('TODO LIST')

    onMounted(() => {
      console.log('@@ onMounted ... route ', route)
    })
    const dones = computed(() => {
      return todoList.filter((item: Todo) => !!item.done)
    })
    const todos = computed(() => {
      return todoList.filter((item: Todo) => !item.done)
    })
    const appName = computed(() => {
      return store.state.appName
    })
    const userName = computed(() => {
      return store.state.userName
    })
    const addCount = computed(() => {
      return store.state.count
    })

    // change todo
    const handleChangeStatus = (item: Todo, status: boolean) => {
      item.done = status
    }
    // add todo
    const handleAddTodo = () => {
      if (!newTodo.value) {
        return alert('请输入代办事项')
      }
      todoList.push({
        text: newTodo.value,
        id: Date.now(),
        done: false
      })
      store.commit('addCount')
      // 还原input
      newTodo.value = ''
    }
    // !!在Vue3.0中，所有的数据和方法都通过在setup 中 return 出去，然后在template中使用
    return {
      header,
      newTodo,
      todoList,
      dones,
      todos,
      appName,
      userName,
      addCount,
      handleChangeStatus,
      handleAddTodo
    }
  }
}
</script>

