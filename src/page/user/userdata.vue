<template>
  <div class="userData" ref="userData">
    <div class="title">我的资料</div>
    <div class="tbsm">特别声明：我们将严格保密您的个人隐私，请放心填写</div>
    <div class="items">
      <div class="item">
        <Row>
          <Col span="6">真实姓名:</Col>
          <Col span="18"><Input v-model="user.realName" ></Input></Col>
        </Row>
      </div>
      <div class="item">
        <Row>
          <Col span="6">出生年月:</Col>
          <Col span="18"><DatePicker type="date" placeholder="" v-model="user.birthday" style="width: 100%" :options="options" :editable=false></DatePicker></Col>
        </Row>
      </div>
      <div class="item">
        <Row>
          <Col span="6">身份证号码:</Col>
          <Col span="18"><Input v-model="user.idNumber" ></Input></Col>
        </Row>
      </div>
      <div class="item">
        <Row>
          <Col span="6">联系方式:</Col>
          <Col span="18"><Input v-model="user.phone" ></Input></Col>
        </Row>
      </div>
      <div class="item">
        <Row>
          <Col span="6">家庭住址:</Col>
          <Col span="18"><Input v-model="user.address" ></Input></Col>
        </Row>
      </div>
      <div class="item">
        <Row>
          <Col span="6">紧急联系人:</Col>
          <Col span="18"><Input v-model="user.urgentName" ></Input></Col>
        </Row>
      </div>
      <div class="item">
        <Row>
          <Col span="6">紧急号码:</Col>
          <Col span="18"><Input v-model="user.urgentPhone" ></Input></Col>
        </Row>
      </div>
    </div>
    <Button type="warning" style="display: block;margin: 3rem auto 0;width: 80%;box-shadow: 0 1px 6px #666;" @click="save">保存</Button>
  </div>
</template>

<script>
  import { getCustomerMessage, updateUserMessage } from '../../interface';

  export default {
    name: "userdata",
    data(){
      return {
        options: {
          disabledDate (date) {
            return date && date.valueOf() > Date.now() - 86400000;
          }
        },
        user: {
          realName: '',
          birthday: '',
          address: '',
          phone: '',
          idNumber: '',
          urgentName: '',
        },
      }
    },
    mounted() {
      this.$refs.userData.style.height = window.screen.availHeight+'px';
      this.getData();
    },
    methods: {
      save() {
        if(this.user.realName == '' || this.user.birthday == '' || this.user.address == '' || this.user.phone == '' || this.user.idNumber == '' || this.user.urgentName == '') {
          this.$Message.warning('请完整填写个人信息');
          return false;
        }
        this.user.birthday = this.user.birthday.pattern('yyyy-MM-dd');
        this.$ajax({
          method: 'post',
          url:updateUserMessage(),
          dataType: 'JSON',
          data: this.user,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.$Message.success('修改成功');
          this.getData();
        }).catch((error) => {
          this.$Message.error('获取失败');
        });
      },
      getData() {
        this.$ajax({
          method: 'get',
          url:getCustomerMessage(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.user = res.data.data;
        }).catch((error) => {
          this.$Message.error('获取失败');
        });
      },
    },
  }
</script>
<style>
  .userData .ivu-select-dropdown{
    z-index: 9999;
  }
</style>
<style scoped>
  .userData .tbsm{
    padding: .4rem;
    color: #fff;
    text-align: center;
  }
  .userData .title {
    font-weight: 600;
    background: #85cbfe;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .userData .items{
    margin: .6rem 1rem;
    padding: .6rem;
    box-shadow: 0 2px 14px #666;
    border-radius: 6px;
    /*overflow: auto;*/
    color: #0185B9;
    background: #fff;
  }
  .userData .items .item{
    line-height: 2.4rem;
    padding: .4rem;
  }
  .userData{
    background: #85cbfe;
  }
</style>
