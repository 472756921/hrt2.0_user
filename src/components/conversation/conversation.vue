<template>
  <div class="conversation" :loading="loading">
    <div class="title">医生工作室</div>
    <talk ref="talk" :sID="sID" @lodingOver="lodingF"/>
    <sendContent @sendMessage="sendMessages" @upBen="upStart" :sID="sID"/>
  </div>
</template>

<script>
  import talk from './talk';
  import sendContent from './sendContent';
  export default {
    name: "conversation",
    data() {
      return {
        sID: '',
        loading: true,
      };
    },
    created() {sta
      this.sID = this.$route.params.id;
    },
    components: { talk, sendContent },
    methods: {
      sendMessages(data) {
        this.$refs.talk.newMessage(data, new Date().pattern("yyyy-MM-dd hh:mm:ss"));
      },
      lodingF() {
        this.loading = false;
      },
      upStart() {
        this.loading = true;
      },
    },
  }
</script>

<style scoped>
  .title{
    background: #43a3f0;
    color: #fff;
    padding: .4rem;
    text-align: center;
    font-size: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
  }
</style>
