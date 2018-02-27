<template>
  <div id="app">
    <router-view/>
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
  color: #2c3e50;
}
  .main_color {
    color: #43a3f0;
  }
  .cmain_color{
    color: #65cc00;
  }
  .red{
    color: red;
  }
  .warning{
    color: #ff8746;
  }
</style>
