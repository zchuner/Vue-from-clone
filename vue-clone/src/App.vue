<template>
  <div id="app">
    <h3>你cc啊</h3>
    <router-view/>
    <router-link to="/hello-world">
      <h4>hellow shazi</h4>
    </router-link>
    <router-link to="/food">
      <h4>ang food</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
