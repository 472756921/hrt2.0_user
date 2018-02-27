<template>
  <div class="ad">
    <h2 class="center">{{data.title}}</h2>
    <div v-html="data.content"></div>
  </div>
</template>

<script>
    export default {
      name: "datile",
      data() {
        return {
          data: '',
        };
      },
      created() {
        this.data = this.$route.params.data;
      },
    }
</script>
<style>
  .ad img{
    width: 100%!important;
  }
</style>
<style scoped>
  .ad{
    padding: .4rem;
  }
  .ad .center{
    text-align: center;
  }
</style>
