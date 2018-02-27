<template>
  <div class="userHData">
    <div class="head">我的云档案</div>
    <img src="../../img/sb.png" width="100%"/>
    <div class="items">
      <item v-for="(it, i) in item" :message=it :key=i />
    </div>
  </div>
</template>

<script>
  import item from '../../components/user/item';
  export default {
    name: "user-h-data",
    components: { item },
    data() {
      return {
        item: [
        {message: '我的云设备', icon: 'android-cloud', url: 'dev'},
        {message: '动态健康数据', icon: 'clipboard', url: 'healthData'},
        {message: '健康档案上传与查看', icon: 'android-list', url: 'file'},
      ],
      };
    },
  }
</script>

<style scoped>
  .userHData .head {
    font-weight: 600;
    background: #45a3ec;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .userHData .items {
    padding: 0 .6rem;
  }
</style>
