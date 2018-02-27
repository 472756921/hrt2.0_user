<template>
  <div>
    <Row class="team_group">
      <Col span="5">
      <div class="head">
        <Avatar icon="medkit" size="large" style='color: #fff;background: #43a3f0'/>
        <div class="status" v-if="data.gradeType==1">游客</div>
        <div class="status_a" v-if="data.gradeType!=1"><i class="iconfont icon-zhuanshi"></i> 会员</div>
      </div>
      </Col>
      <Col span="18">
      <div class="content">
        <div class="tite">
          <span class="text" @click="show">{{this.data.name}}</span>
          <Button type="warning" size="small" class="btn btn_up" v-if="data.gradeType==1" @click="addTeam">升级</Button>
        </div>
        <div class="inter">
          {{this.data.remakrs}}
        </div>
        <team_opating :grade="data.gradeType" :teamID="data.id" :btn="data.serviceDTOList"/>
      </div>
      </Col>
    </Row>
    <line_block_l/>
  </div>
</template>

<script>
  import team_opating from './team_opating';
  import line_block_l from '../line_block_l';

  export default {
    name: "team-group",
    components: {team_opating, line_block_l},
    props: ['data'],
    data() {
      return {};
    },
    created() {
    },
    methods: {
      addTeam() {
        this.$router.push({path: this.data.id + '/addTeam'});
      },
      show() {
        this.$router.push({name: 'teamShow', params: {data: this.data}});
      },
    },
  }
</script>

<style scoped>
  .team_group {
    padding: .4rem;
    margin: .4rem 0;
  }

  .team_group .icon-zhuanshi {
    font-size: .6rem;
  }

  .team_group .content .tite {
    text-align: left;
  }

  .team_group .head {
    text-align: center;
  }

  .team_group .head .status {
    margin-top: .4rem;
    color: #999;
  }

  .team_group .head .status_a {
    margin-top: .4rem;
    color: #c63318;
  }

  .team_group .content .tite .text {
    font-size: .9rem;
    color: #43a3f0;
  }

  .team_group .content .tite .btn_add {
    background: #43a3f0;
  }

  .team_group .content .tite .btn_up {
    background: #feb813;
  }

  .team_group .content .tite .btn {
    vertical-align: bottom;
    border: none;
  }

  .team_group .content .inter {
    margin: .4rem 0;
    color: #666;
    height: 3.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

</style>
