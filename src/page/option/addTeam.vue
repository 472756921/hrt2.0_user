<template>
    <div class="addTeam">
      <img src="http://iph.href.lu/400x200" width="100%"/>
      <div :class="active==0?'teamContent active':'teamContent'" @click="chooes(0)">
        <div class="title">{{teamName}}<span style="float: right"> <i class="iconfont icon-zhuanshi"></i>成为会员</span></div>
        <div class="pric">￥{{price}}</div>
        <div class="content">{{remarks}}</div>
      </div>
      <div class="xy"><Checkbox v-model="single">我已阅读并同意<a href="#/service_agreement">《服务协议》</a></Checkbox></div>
      <Button type="primary" class="btn" @click="cz">成为会员</Button>
    </div>
</template>

<script>
import {findTeamGrade} from '../../interface';

export default {
  name: "add-team",
  data() {
    return {
      single: false,
      active: 0,
      price: 999,
      teamName: '',
      teamId: '',
      remarks: '',
      healthPackageId: '',
      data: '',
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$ajax({
        method: 'GET',
        url:findTeamGrade() + this.$route.params.id,
        dataType: 'JSON',
        contentType: 'application/json;charset=UTF-8',
      }).then((res) => {
        this.price = res.data.data[0].price;
        this.teamId = res.data.data[0].teamId;
        this.teamName = res.data.data[0].teamName;
        this.remarks = res.data.data[0].remarks;
        this.healthPackageId = res.data.data[0].healthPackageId;
        this.data = res.data.data[0];
        this.data.id = res.data.data[0].healthPackageId;
      }).catch((error) => {
        this.$Message.error('获取团队列表失败');
      });
    },
    chooes(data) {
      this.active = data;
    },
    cz() {
      if (this.single) {
        this.data.type = 12138;
        this.$router.push({name: 'payChooes', params:{data: this.data}});
      } else {
        this.$Message.error('请阅并同意服务协议');
      }
    },
  },
}
</script>

<style scoped>
  .addTeam{
  }
  .pric{
    font-size: .8rem;
    color: #ff8746;
  }
  .addTeam .xy{
    margin: .6rem;
    padding: .4rem;
  }
  .teamContent{
    margin: .6rem;
    padding: .4rem;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  .teamContent .title{
    font-size: 1rem;
  }
  .active{
    border: 1px solid #43a3f0;
    color: #43a3f0;
  }
  .teamContent .content{
    line-height: 1.3rem;
    letter-spacing: .05rem;
  }
  .btn{
    width: 80%;
    display: block;
    margin: 1rem auto;
  }
</style>
