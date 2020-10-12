<style scoped>
  .logo {
    width: 10px;
    height: 10px;
  }
</style>

<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div class="tabs">
    <router-link to="/home">Go to Home</router-link> |
    <router-link to="/todo-list">Go to TodoList</router-link> |
    <router-link to="/about">Go to About</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>
