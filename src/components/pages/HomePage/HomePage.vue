<template>
  <div class="container">
    <el-button type="primary" @click="signout()">Signout</el-button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    signout() {
      localStorage.removeItem('nickyName');
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>