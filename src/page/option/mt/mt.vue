<template>
    <div class="mt">
      <img src="http://iph.href.lu/400x200" width="100%"/>
      <div class="content">
        <div class="title">
          <span class="titleText">门特办理服务</span>
          <span class="time">（剩余{{times}}次）</span>
          <span class="more" @click="more">历史记录</span>
        </div>
        <div class="description">
          <p>- 工作室先与您沟通整理好您想咨询的问题和您方便通话的时间</p>
          <p>- 工作室与专家预约时间，24小时内专家亲自给您回电</p>
          <p>- 预约成功后原则上不予取消，否则作废</p>
        </div>
        <Button type="primary" shape="circle" icon="ios-search" class="r_btn" @click="send" :disabled="btnd">我要预约</Button>
        <div class="sm">预约成功后，24小时内专属管理师将与您沟通</div>
      </div>
    </div>
</template>

<script>
  import { addVisitInformation, getCustomerServiceNum } from '../../../interface';
    export default {
      name: "mt",
      created() {
        this.teamId = this.$route.params.teamID;
        this.sData = this.$route.query.data;
        if(this.sData.id == undefined){
          this.$router.push({name: 'home'});
        }
        this.healthServiceId = this.sData.id;
        this.getTimes();
      },
      data() {
        return {
          healthServiceId: 0,
          times: 0,
          btnd: false,
          sData: '',
        };
      },
      methods: {
        more() {
          this.$router.push({name: 'mt_history'});
        },
        send() {
          if (this.times <= 0) {
            this.$Message.warning('对不起，您的服务次数已经耗尽');
            this.sData.teamId = this.teamId;
            setTimeout(()=>{this.$router.push({name: 'payChooes', params:{data: this.sData}});}, 1200)
            return false;
          }
          this.$ajax({
            method: 'post',
            url:addVisitInformation(),
            data: {
              "healthServiceId": this.healthServiceId,
              "teamId":  parseInt(this.teamId),
            },
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data.code == 0){
              this.$Message.success('预约成功');
              this.times = this.times - 1;
              this.btnd = true;
            }else {
              this.$Message.error(res.data.msg);
            }
          }).catch((error) => {
            this.$Message.error('网络掉了，请您稍后');
          });
        },
        getTimes () {
          this.$ajax({
            method: 'get',
            url:getCustomerServiceNum()+'?healthServiceId='+this.healthServiceId+'&teamId=' + this.teamId,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.times = res.data.data;
          }).catch((error) => {
            this.$Message.error('网络掉了，请您稍后');
            this.btnd = true;
          });
        },
      },
    }
</script>

<style scoped>
  .mt{
  }
  .mt .sm{
    text-align:center;
    color: #ff8746;
    font-size: .6rem;
    line-height: 1.6rem;
  }
  .mt .r_btn{
    margin-top: 40%;
    font-size: 1rem;
    width: 100%;
  }
  .mt .content{
    padding: 0 .4rem ;
  }
  .mt .description{
    padding: .6rem;
    font-size: .8rem;
    line-height: 1.6rem;
    color: #888;
  }
  .mt .title {
    padding: .4rem;
    font-size: 1rem;
  }
  .mt .title .time{
    font-size: .6rem;
    color: #43a3f0;
  }
  .mt .title .more{
    float: right;
    color: #43a3f0;
  }
</style>
