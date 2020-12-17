<template>
  <suspense>
    <template #default>
      <AsyncData />
    </template>
    <template #fallback>
      Loading...
    </template>
  </suspense>
</template>

<script>
import AsyncData from './components/AsyncData.vue'

export default {
  name: 'App',
  components: {
    AsyncData
  }
}
</script>


