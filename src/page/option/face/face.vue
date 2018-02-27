<template>
    <div class="me">
      <img src="http://iph.href.lu/400x200" width="100%"/>
      <div class="content">
        <div class="title">
          <span class="titleText">专家面对面预约</span>
          <span class="time">（剩余{{times}}次）</span>
          <span class="more" @click="more">历史记录</span>
        </div>
        <div class="description">
          <p>- 高端专享咨询场所</p>
          <p>- 20分钟与专家面对面，充分交流</p>
          <p>- 得到全面的健康管理评估和管理计划</p>
          <p>- 预约成功后原则上不予取消，否则作废</p>
        </div>
        <div class="c_dates">
          <div class="c_data_title"><i class="iconfont icon-LC_icon_date_line_1"></i> 请选择预约时间</div>
          <Row :gutter="16">
            <Col span="24" v-if="dateData.length==0" class="noTime">暂未安排时间，敬请期待</Col>
            <Col span="8" v-for="(it, i) in dateData" :key="i">
              <div class="c_date" :class="selectd==i?'selectd':''"  @click="change(i, it.surplusNum)">
                <div class="flag" v-if="selectd == i"><i class="iconfont icon-gou"></i></div>
                {{it.visitDate}}
              </div>
              <div class="c_time" v-if="it.surplusNum>=5">剩余<span class="num"> {{it.surplusNum}} </span>个名额</div>
              <div class="warning c_time" v-if="it.surplusNum<5&&it.surplusNum>0">仅剩<span class="num"> {{it.surplusNum}} </span>个名额</div>
              <div class="red c_time" v-if="it.surplusNum <= 0">名额已满</div>
            </Col>
          </Row>
        </div>
        <Button type="primary" shape="circle" icon="ios-search" class="r_btn" @click="send" :disabled="btnd">我要预约</Button>
        <div class="sm">预约成功后，24小时内专属管理师将与您沟通</div>
      </div>
    </div>
</template>

<script>
  import { addVisitInformation, getTeamVisitTime, getCustomerServiceNum } from '../../../interface';
    export default {
      name: "face",
      created() {
        this.teamId = this.$route.params.teamID;
        this.sData = this.$route.query.data;
        if(this.sData.id == undefined){
          this.$router.push({name: 'home'});
        }
        this.healthServiceId = this.sData.id;
        this.getDate();
        this.getTimes();
      },
      data() {
        return {
          dateData: [],
          healthServiceId: 0,
          selectd: 4,
          times: 0,
          btnd: false,
          sData: '',
        }
      },
      methods: {
        change(index, time) {
          if (time <= 0) {
            return false;
          }
          this.selectd = index;
        },
        more() {
          this.$router.push({name: 'face_history'})
        },
        getDate() {
          this.$ajax({
            method: 'get',
            url:getTeamVisitTime() + parseInt(this.teamId),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.dateData = res.data.data;
          }).catch((error) => {
            this.$Message.error('获取预约时间失败');
          });
        },
        send() {
          if (this.selectd > 3 || this.selectd < 0) {
            this.$Message.warning('请选择面诊时间');
            return false
          }
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
              "dateID": this.dateData[this.selectd].id,
            },
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data.code == 0){
              this.$Message.success('预约成功');
              this.times = this.times - 1;
              this.btnd = true;
              this.dateData[this.selectd].surplusNum = this.dateData[this.selectd].surplusNum - 1;
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
            this.btnd = true;
            this.$Message.error('网络掉了，请您稍后');
          });
        },
      },
    }
</script>

<style scoped>
  .me .noTime{
    text-align: center;
    margin-top: .4rem;
    color: #cc0000;
  }
  .me .flag{
    position: absolute;
    right: 6px;
    top: -4px;
  }
  .icon-LC_icon_date_line_1{
    color: #43a3f0;
  }
  .me .c_data_title{
    margin-bottom: .6rem;
  }
  .selectd{
    border: 1px solid #43a3f0!important;
    color: #43a3f0;
  }
  .me .c_date {
    width: 100%;
    border: 1px solid #eee;
    padding: .4rem;
    text-align: center;
    font-size: .6rem;
    border-radius: .3rem;
    letter-spacing: .05rem;
  }
  .me .c_time{
    font-size: .6rem;
    text-align: center;
    color: #666;
  }
  .me .c_time .num{
    color: #43a3f0;
  }
  .red{
    color: red!important;
  }
  .warning{
    color: #ff8746!important;
  }
  .me .c_dates {
    padding: .4rem;
    font-size: 1rem;
  }
  .me .sm {
    text-align:center;
    color: #ff8746;
    font-size: .6rem;
    line-height: 1.6rem;
  }
  .me .r_btn {
    margin-top:10%;
    font-size: 1rem;
    width: 100%;
  }
  .me .content {
    padding: 0 .4rem ;
  }
  .me .description {
    padding: .6rem;
    font-size: .8rem;
    line-height: 1.6rem;
    color: #888;
  }
  .me .title {
    padding: .4rem;
    font-size: 1rem;
  }
  .me .title .time {
    font-size: .6rem;
    color: #43a3f0;
  }
  .me .title .more {
    float: right;
    color: #43a3f0;
  }
</style>
