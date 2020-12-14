<template>
  <div>
    <input v-model="value">
    <button @click="createData">create</button>
  </div>
</template>

<script>
export default  {
  data() {
    return {
      value: ""
    }
  },
  methods: {
    createData() {
      this.$emit("createData", this.value)
      this.value = ""
    }
  }
}
</script>