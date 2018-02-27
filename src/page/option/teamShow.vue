<template>
  <div class="teamShow" ref="teamShow">
    <div class="title">{{this.data.name}}</div>
    <img :src="'http://118.31.38.185'+this.data.icon" width="60%" class="docImg"/>
    <div class="text">{{this.data.remakrs}}</div>
  </div>
</template>

<script>
    export default {
      name: "team-show",
      created() {
        this.data = this.$route.params.data;
      },
      mounted() {
        this.$refs.teamShow.style.height = window.screen.availHeight+'px';
      },
      data() {
        return {
          data: '',
        };
      },
    }
</script>

<style scoped>
  .teamShow{
    background: #43a3f0;
    padding: .4rem;
  }
  .teamShow .title {
    font-weight: 600;
    background: #43a3f0;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .teamShow .text{
    color: #fff;
    font-size: .9rem;
    margin-top: .6rem;
    line-height: 1.4rem;
  }
  .teamShow .docImg{
    display: block;
    margin: 0 auto;
    border: 10px solid #fff;
  }
</style>
