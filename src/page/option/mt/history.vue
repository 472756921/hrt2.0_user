<template>
  <div class="history_content" ref="history_content">
    <div class="title">历史记录</div>
    <div class="list">
      <div class="item" v-for="(it, i) in data">
        <Row>
          <Col span="4">
            <Avatar size="large" style="background: #43a3f0">{{tName}}</Avatar>
          </Col>
          <Col span="20">
            <div class="userName"><span class="c9">患者姓名：</span>{{it.userName}}</div>
            <div class="userName"><span class="c9">就诊卡号：</span>{{it.number}}</div>
            <div class="date"><span class="c9">就诊时间：</span>{{it.faceTime}}</div>
            <div class="f_btn over cmain_color" v-if="it.status==1">已完成</div>
            <div class="f_btn n_over red" v-if="it.status==0">进行中</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
  import { findTeamCustomerHealServiceNum } from '../../../interface';
  export default {
    name: "history",
    data() {
      return {
        data: [],
        teamId: '',
        tName: '',
      };
    },
    mounted() {
      this.$refs.history_content.style.height = window.screen.availHeight+'px';
      this.teamId = this.$route.params.teamID;
      this.getList();
    },
    methods: {
      getList() {
        this.$ajax({
          method: 'get',
          url:findTeamCustomerHealServiceNum()+'?healthServiceId=11&teamId=' + this.teamId,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data = res.data.data;
          this.data.map((it, i)=>{
            it.visiteStartDate = it.visiteStartDate.split(' ')[0];
            this.tName = it.teamName.slice(0, it.teamName.indexOf('医生'));
          })
        }).catch((error) => {
          this.$Message.error('网络掉了，请您稍后');
        });
      },
    },
  }
</script>
<style scoped>
  .history_content {
    padding: .4rem .6rem;
    background: #f1f1f1;
  }
  .history_content .title {
    font-size: 1rem;
    line-height: 2rem;
    margin-bottom: .6rem;
  }
  .history_content .list {
    padding: .4rem;
    background: #fff;
  }
  .history_content .list .item {
    padding: .8rem 0;
    border-bottom: 1px solid #eee;
    line-height: 1.4rem;
    letter-spacing: .05rem;
  }
  .item .date{
    color: #43a3f0;
  }
  .item .userName{
    color: #666;
  }
  .f_btn{
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .c9 {
    color: #999;
  }
</style>
