<template>
    <div class="file" ref="file">
      <div class="head">健康档案上传与查看</div>
      <div class="items">
        <item v-for="(it, i) in item" :message=it :key=i />
      </div>
    </div>
</template>

<script>
  import item from '../../../components/user/item';
    export default {
      name: "file",
      components: { item },
      data() {
        return {
          item: [
            {message: '出院证明', icon: 'medkit', url: 'LeaveHospital'},
            {message: '重点指标数据', icon: 'heart', url: 'KeyIndicators'},
            {message: '健康报告归档', icon: 'compose', url: 'HealthReport'},
            {message: '健康需求管理目标共识表', icon: 'android-list', url: 'HealthNeeds'},
          ],
        };
      },
    }
</script>

<style scoped>
  .file .head {
    font-weight: 600;
    background: #45a3ec;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .file .items {
    padding: 0 .6rem;
  }
</style>
