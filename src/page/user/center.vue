<template>
  <div class="userCenter" ref="userCenter">
    <div class="head">
      <Row>
        <Col span="6">
          <div class="name">{{user.name}} <Icon type="female" v-if="user.sex==0"></Icon><Icon type="male" v-if="user.sex==1"></Icon></div>
        </Col>
        <Col span="12">
          <div class="headImg">
            <img :src="user.image.url!=''?user.image.url:'http://www.schrtinfo.com/userHead.jpg'" width="100"/>
          </div>
        </Col>
        <Col span="6">
          <div class="other">
            <div>健康豆:{{user.money}}</div>
            <Button type="error" size="small" @click="recharge">充值</Button>
          </div>
        </Col>
      </Row>
    </div>

    <div class="items">
      <item v-for="(it, i) in item" :message=it :key=i />
    </div>

    <footers></footers>
  </div>
</template>

<script>
  import item from '../../components/user/item';
  import footers from '../../components/footers';
  import { getCustomerMessage } from '../../interface';

    export default {
      name: "center",
      components: { item, footers },
      mounted() {
        this.$refs.userCenter.style.height = window.screen.availHeight+'px';
        this.getData();
      },
      data(){
        return {
          user: {image:{url:''}},
          item: [
            {message: '我的资料', icon: 'android-person', url: 'userData'},
            {message: '我的健管师', icon: 'android-contact', url: 'userAD'},
            {message: '我的健康日程', icon: 'calendar', url: 'userDate'},
            {message: '我的云档案', icon: 'android-cloud', url: 'userHData'},
            {message: '购买记录', icon: 'bag', url: 'userShop'},
          ],
        }
      },
      methods: {
        recharge() {
          this.$router.push({name: 'recharge'});
        },
        getData() {
          this.$ajax({
            method: 'get',
            url:getCustomerMessage(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if(res.data.code == -1){
              this.$Message.error('获取失败,请稍后重试');
              return false;
            }
            this.user = res.data.data;
            if(res.data.data.realName == '') {
              this.$router.push({name: 'userData'});
            }
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
      },
    }
</script>

<style scoped>
  .userCenter {
    background: #85cbfe;
  }
  .userCenter .head{
    color: #fff;
  }
  .head .other,.head .name {
    padding-top: 2rem;
    font-size: 1rem;
  }
  .userCenter .head{
    text-align: center;
    padding: 2rem .4rem;
    background: url("../../img/userInfo.jpg") no-repeat 100%;
    font-size: .8rem;
  }
  .userCenter .headImg{
    border-radius: 50% 50%;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    overflow: hidden;
  }
  .userCenter .items{
    margin: .6rem 1rem;
    box-shadow: 0 2px 18px #999;
    border-radius: 10px;
    background: #fff;
  }
</style>
