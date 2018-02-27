<template>
  <div class="userShop" ref="userShop">
    <div class="title">购买记录</div>
    <div class="items">
      <Tabs value="name1">
        <TabPane label="消费记录" name="name1"><shop_list :type="1"/></TabPane>
        <TabPane label="充值记录" name="name2"><shop_list :type="0"/></TabPane>
        <TabPane label="服务余额" name="name3"><teamBalance/></TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import shop_list from '../../../components/user/shop_list';
  import teamBalance from '../../../components/user/teamBalance';

  export default {
    name: "user-shop",
    components: { shop_list, teamBalance },
    data() {
      return {
        item: [
          {message: '消费记录', icon: 'cash', url: 'userData'},
          {message: '充值记录', icon: 'card', url: 'userAD'},
          {message: '服务余额', icon: 'contrast', url: 'userDate'},
        ],
      };
    },
    mounted() {
      this.$refs.userShop.style.height = window.screen.availHeight+'px';
    },

  }
</script>

<style scoped>
  .userShop{
    background: #85cbfe;
    padding: .4rem;
    color: #fff;
  }
  .userShop .title {
    font-weight: 600;
    background: #85cbfe;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .userShop .items{
    margin: .6rem 1rem;
    padding: .6rem;
    box-shadow: 0 2px 14px #666;
    border-radius: 6px;
    overflow: auto;
    color: #0185B9;
    background: #fff;
  }
</style>
