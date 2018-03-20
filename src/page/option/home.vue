<template>
  <div class="home" ref="home">
    <adc/>
    <line_block/>
    <div class="teamClass">
      <div class="title"><i class="iconfont icon-yisheng"></i> 我的医生团队 <span class="more" @click="teamList">所有团队</span></div>
      <line_/>
      <div class="noTeam" v-if="list.length==0">您暂未关注任何团队</div>
      <teamGroup @cancelGZ="qxgz" :data="it" :index="i" v-for="(it, i) in list" :key="i"/>
    </div>
  </div>
</template>

<script>
  import adc from '../../components/op/adc';
  import teamGroup from '../../components/op/teamGroup';
  import line_block from '../../components/line_block';
  import line_ from '../../components/line_';
  import { getCustomerTeams, getCustomerMessage } from '../../interface';

    export default {
      name: "home",
      components: { adc, line_block, line_, teamGroup },
      mounted() {
        this.$refs.home.style.height = window.screen.availHeight+'px';
      },
      data() {
        return {
          list: [],
        }
      },
      created () {
        this.getList();
        this.getData();
      },
      methods: {
        getList() {
          this.$ajax({
            method: 'GET',
            url:getCustomerTeams(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.list = res.data.data;
          }).catch((error) => {
            this.$Message.error('获取团队列表失败');
          });
        },
        getData() {
          this.$ajax({
            method: 'get',
            url:getCustomerMessage(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            const userImg = res.data.data.image.url;
            localStorage.setItem('userHead', userImg);
          }).catch((error) => {
            this.$Message.error('获取用户数据失败');
          });
        },
        teamList() {
          this.$router.push({name: 'teamList'});
        },
        qxgz(index) {
          this.list.splice(index, 1)
        },
      },
    }
</script>

<style scoped>
  .home {
  }
  .home .teamClass{
    padding: .4rem;
  }
  .home .title{
    font-size: .9rem;
    padding: .2rem 0;
    box-shadow: 0 .2rem .8rem #f9f9f9;
  }
  .home .title .iconfont{
    color: #43a3f0;
  }
  .home .more{
    float: right;
    color: #43a3f0;
  }
  .home .noTeam{
    color: #999999;
    text-align: center;
    padding: 3rem 0;
  }
</style>
