<template>
  <div class="teamList" ref="teamList">
    <div class="head">全部团队</div>
    <div class="items">
      <div class="item" v-for="(it, i) in list" :key="i" @click="show(it)">
        <Row class="team_group" >
          <Col span="5">
            <div class="teamHead">
              <img :src="it.image.url" width="100%"/>
            </div>
          </Col>
          <Col span="19">
            <div class="content">
              <div class="title">
                <span class="text">{{it.name}}</span>
              </div>
              <div class="inter">
                {{it.remarks}}
              </div>
              <Button type="ghost" size="small" style="float: right;margin: 1rem 0" @click="gz(it)">+ 关注</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>


    <Modal v-model="teamShow" title="团队详情" class="show">
      <div class="item">团队名：<span class="info">{{showMessages.name}}</span></div>
      <div class="item">团队类型：<span class="info">{{showMessages.teamType.name}}</span></div>
      <div class="item">健管师：<span class="info">{{showMessages.healthName}}</span></div>
      <div class="item">健管师电话：<span class="info">{{showMessages.healthPhone}}</span></div>
      <div class="item Introduction">团队简介：<span class="info">{{showMessages.remarks}}</span></div>
      <div class="item Introduction">医生简介：<span class="info">{{showMessages.doctorRemarks}}</span></div>
      <div class="item Introduction">健管师简介：<span class="info">{{ADMessage.remarks}}</span></div>
      <div class="item">
        <img :src= 'showMessages.image.url' title="医生头像" alt="医生头像" width="49%" />
        <img :src= 'showMessages.healthTeacherImg.url' alt="健管师头像" title="健管师头像" width="49%"/>
      </div>
    </Modal>


  </div>
</template>

<script>
  import { teamList, detail, ADdetail, userAddTeam } from '../interface';

  export default {
    name: "team-list",
    data() {
      return {
        teamShow: false,
        ADMessage: {remarks: ''},
        showMessages: {
          name: '',
          healthName: '',
          healthPhone: '',
          doctorRemarks: '',
          remarks: '',
          teamType: {name: ''},
          image: {url: ''},
          healthTeacherImg: {url: ''},
        },
        list: [],
      };
    },
    mounted() {
      this.$refs.teamList.style.height = window.screen.availHeight+'px';
    },
    created() {
      this.$ajax({
        method: 'GET',
        url:teamList()+'?page=1&size=50',
        dataType: 'JSON',
        contentType: 'application/json;charset=UTF-8',
      }).then((res) => {
        this.list = res.data.data.content;
      }).catch((error) => {
        this.$Message.error('获取团队列表失败');
      });
    },
    methods:{
      show(data) {
        this.$ajax({
          method: 'GET',
          url:detail()+data.id,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.showMessages = res.data.data;
        }).catch((error) => {
          this.$Message.error('获取团队列表失败');
        });
        this.$ajax({
          method: 'GET',
          url:ADdetail()+data.healthTeacherId,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.ADMessage = res.data.data;
        }).catch((error) => {
          this.$Message.error('获取团队列表失败');
        });
        this.showMessages = data;
        this.teamShow = true;
      },
      gz(data, e) {
        event.cancelBubble = true;
        event.stopPropagation();
        this.$ajax({
          method: 'get',
          url:userAddTeam() + "?teamId=" + data.id,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if(res.data.code == 0) {
            this.$Message.success('关注成功');
          }else {
            this.$Message.error(res.data.msg);
          }
        }).catch((error) => {
          this.$Message.error('获取团队列表失败');
        });
      },
    },
  }
</script>

<style scoped>
  .teamList{
  }
  .teamList .head{
    font-size: 1rem;
    text-align: center;
    padding: .6rem 0;
    background: #1d8ce0;
    color: #ffffff;
  }
  .teamList .item{
    padding: .4rem;
    margin: .4rem;
    background: #ffffff;
    border-bottom: 1px solid #eee;
  }
  .teamList .item .teamHead{
  }
  .teamList .item .content{
    padding: 0 .6rem;
  }
  .teamList .item .content .title{
    font-size: .9rem;
    text-align: left;
    color: #1d8ce0;
  }
  .teamList .item .content .inter {
    height: 3.3rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .show .item .info{
    color: #999;
  }
  .show .item{
    margin: 6px 0;
  }
  .show .Introduction{
    background: #eee;
    padding: 10px;
  }
</style>
