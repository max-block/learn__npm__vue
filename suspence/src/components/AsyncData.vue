<template>
  <ul>
    <li v-for="(n, index) in numbers" :key="index">{{ n }}</li>
  </ul>
</template>

<script>
import {ref} from "@vue/reactivity";

export default {
  async setup() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const numbers = ref([1, 2, 3, 4, 5])
    return {numbers}
  }
}
</script>