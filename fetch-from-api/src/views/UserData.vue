<template>
  <div>
    <h1>User Data</h1>
    ip: {{ ip }}<br>
    user-agent: {{ userAgent }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ip: "unknown",
      userAgent: "unknown"
    }
  },
  async created() {
    // get ip
    let res = await axios.get("https://httpbin.org/ip")
    this.ip = res.data.origin

    // ip user-agent
    res = await axios.get("https://httpbin.org/user-agent")
    this.userAgent = res.data["user-agent"]
  }
}
</script>