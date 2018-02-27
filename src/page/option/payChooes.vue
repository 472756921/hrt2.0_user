<template>
    <div class="payChooes" ref="payChooes">
      <div class="title">请选择支付方式</div>
      <div class="info">
        <div class="head">{{data.name}}</div>
        <div>服务费用：<span style="color: red">￥{{data.price}}（{{data.price}}健康豆）</span></div>
        <div style="margin: .4rem;color: #999">{{data.remarks}}</div>
      </div>
      <div class="item" v-if="money>=data.price"  @click="pay(0)">健康豆支付 <Icon type="chevron-right" style="float: right;line-height: 2rem"></Icon></div>
      <div class="item"  @click="pay(1)">微信支付 <Icon type="chevron-right" style="float: right;line-height: 2rem"></Icon></div>
    </div>
</template>

<script>
  import {getCustomerMessage, pay} from '../../interface';

    export default {
      name: "pay-chooes",
      mounted() {
        this.$refs.payChooes.style.height = window.screen.availHeight+'px';
        this.data = this.$route.params.data;
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
          this.money = res.data.data.money;
        }).catch((error) => {
          this.$Message.error('获取失败');
        });
        console.log(this.data);
      },
      data() {
        return {
          data: '',
          money: '',
        };
      },
      methods: {
        pay(type) {
          let data = {
            healthPackId: this.data.id,
            teamId: this.data.teamId,
            type: type,
          };
          if (type == 0) {
            this.beans(data);
          }
          if (type == 1) {
            this.wxpay(data);
          }
        },
        beans(data) {
          this.$ajax({
            method: 'POST',
            url:pay(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if(res.data.code == 0){
              if(this.data.type == 12138){
                this.$Message.success('支付成功');
                setTimeout(()=>{this.$router.push({name: 'home'});}, 1000)
              } else {
                this.$Message.success('支付成功，您可以返回继续预约服务');
              }
            }
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
        wxpay(data) {
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
                setTimeout(()=>{this.$router.push({name: 'home'});}, 1000)
              }
            }
          );
        },
      },
    }
</script>

<style scoped>
  .payChooes{
    background: #43a3f0;
    padding: .4rem;
  }
  .payChooes .title{
    font-size: .9rem;
    color: #ffffff;
    text-align: center;
    margin: 1rem 0;
  }
  .payChooes .item{
    border-bottom: 1px solid #eee;
    line-height: 2rem;
    background: #fff;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    padding: .4rem;
    border-radius: 5px;
    color: #666;
    margin-top: .1rem;
  }
  .payChooes .info{
    background: #fff;
    padding: 1rem;
    margin: .6rem;
    border-radius: 5px;
    text-align: center;
  }
  .payChooes .info .head {
    font-size: 1rem;
    color: #43a3f0;
    margin-bottom: .2rem;
  }
</style>
