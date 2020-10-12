<template>
  {{title}}
</template>

<script lang="ts">
import { onMounted } from 'vue'

export default {
  data: () => {
    return {
      title: 'this is home page'
    }
  },

  onMounted: () => {
    console.log('mounted');
  }

}
</script>
