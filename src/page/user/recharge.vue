<template>
  <div class="recharge" ref="recharge">
    <div class="title">充值中心</div>
    <div class="items">
      <div :class="index==i?'item active':'item'" v-for="(it, i) in data" @click="index=i">
        <div class="name">{{it.name}}</div>
        <div class="warning">￥{{it.price}}</div>
      </div>
    </div>
    <div class="addBtn">
      <Button type="warning" long @click="push">充值</Button>
    </div>
  </div>
</template>

<script>
  import {getHealthPackage, pay} from '../../interface';

  export default {
    name: "recharge",
    data() {
      return {
        index: 0,
        data: [],
      };
    },
    mounted() {
      this.getData();
      this.$refs.recharge.style.height = window.screen.availHeight+'px';
    },
    methods: {
      push() {
        let data = {
          healthPackId: this.data[this.index].id,
          teamId: -1,
          type: 1,
        };
        this.$ajax({
          method: 'POST',
          url: pay(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (typeof window.WeixinJSBridge === 'undefined') {
            if (document.addEventListener) {
              document.addEventListener('window.WeixinJSBridgeReady',
                this.onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('window.WeixinJSBridgeReady', this.onBridgeReady);
              document.attachEvent('window.onWeixinJSBridgeReady', this.onBridgeReady);
            }
          } else {
            this.onBridgeReady(res.data.data.appId, res.data.data.nonceStr,res.data.data.packAge, res.data.data.paySign, res.data.data.timeStamp);
          }
        }).catch((error) => {
          this.$Message.error(error.message);
        });
      },
      onBridgeReady(appIdV, nonceStrV, prepayIdV, paySignV, timeStampV) {
        window.WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            'appId': appIdV,
            'timeStamp': timeStampV.toString(),
            'nonceStr': nonceStrV,
            'package':  prepayIdV,
            'signType': 'MD5',
            'paySign': paySignV,
          },
          (res) => {
            if (res.err_msg == 'get_brand_wcpay_request:ok') {
              this.$Message.success('充值成功');
              setTimeout(()=>{this.$router.push({name: 'center'});}, 1000)
            }
          }
        );
      },
      getData() {
        this.$ajax({
          method: 'GET',
          url:getHealthPackage(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.data = res.data;
        }).catch((error) => {
          this.$Message.error('获取团队列表失败');
        });
      },
    },
  }
</script>

<style scoped>
  .recharge{
    background: #85cbfe;
    padding: .4rem;
    color: #fff;
  }
  .recharge .title {
    font-weight: 600;
    background: #85cbfe;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .recharge .items{
    margin: .6rem 1rem;
    padding: .6rem 2rem;
    box-shadow: 0 2px 14px #666;
    border-radius: 6px;
    overflow: auto;
    color: #0185B9;
    background: #fff;
  }
  .recharge .active{
    border: 1px solid #0185B9 !important;
    box-shadow: 0 1px 10px #ccc;
  }
  .recharge .item{
    padding: .6rem;
    margin: .4rem .2rem;
    border: 1px solid #eee;
    border-radius: 6px;
    width: 46%;
    float: left;
  }
  .recharge .name{
    font-size: 1rem;
    color: #0185B9;
  }
  .addBtn{
    position: fixed;
    bottom: .6rem;
    width: calc(100% - 1.2rem);
  }
</style>
