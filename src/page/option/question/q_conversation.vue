<template>
  <div class="conversation_content">
    <conversation/>
  </div>
</template>

<script>
  import conversation from '../../../components/conversation/conversation';
    export default {
      name: "q_conversation",
      components: { conversation },
      methods: {
        showIMG() {
          alert(1)
        },
      },
    }
</script>

<style scoped>
</style>
