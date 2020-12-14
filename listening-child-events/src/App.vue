<template>
  <create-data @createData="addToItems"/>

  <ul>
    <li v-for="(item, idx) in items" :key="idx">{{ item }}
      <button @click="deleteFromItems(idx)">delete</button>
    </li>
  </ul>

</template>

<script>
import CreateData from "./components/CreateData"

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    addToItems(val) {
      this.items.push(val)
    },
    deleteFromItems(idx) {
      this.items.splice(idx, 1)
    }
  },
  components: {CreateData}
}
</script>


