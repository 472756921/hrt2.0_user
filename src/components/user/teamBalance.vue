<template>
    <div class="teamBalance">
      <div class="items">
        <div class="item"  v-for="(it, i) in data">
          <div class="title">{{it.teamName}}</div>
          <Row>
            <Col span="12">在线咨询：<span class="main_color">{{it.onlineNum}}</span> 次</Col>
            <Col span="12">电话预约：<span class="main_color">{{it.phoneNum}}</span> 次</Col>
            <Col span="12">专家面诊：<span class="main_color">{{it.expertNum}}</span> 次</Col>
            <Col span="12">视频预约：<span class="main_color">{{it.videoNum}}</span> 次</Col>
            <Col span="12">门特办理：<span class="main_color">{{it.mentorNum}}</span> 次</Col>
          </Row>
        </div>
      </div>
    </div>
</template>

<script>
  import { getCustomerServiceDetial } from '../../interface';
  export default {
    name: "team-balance",
    data() {
      return {
        data: [],
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.$ajax({
          method: 'get',
          url:getCustomerServiceDetial(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data = res.data.data;
        }).catch((error) => {
          this.$Message.error('获取失败');
        });
      },
    },
  }
</script>

<style scoped>
  .teamBalance{

  }
  .teamBalance .item {
    padding: .4rem;
    border-bottom: 1px solid #eee;
  }
  .teamBalance .title{
    font-size: 1.2rem;
    text-align: center;
    padding: .4rem 0;
  }
</style>
