<template>
  <div  class="shopList" ref="shopList">
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
  import { getCustomerHistoryOrder } from '../../interface';
    export default {
      name: "shop_list",
      mounted() {
        this.$refs.shopList.style.height = window.screen.availHeight - 160 +'px';
        this.getData();
      },
      props: ['type'],
      data () {
        return {
          columns1: [
            {
              title: '时间',
              key: 'crateDate'
            },
            {
              title: '商品名',
              key: 'serviceName'
            },
            {
              title: '金额',
              key: 'price'
            }
          ],
          data1: [],
        }
      },
      methods: {
        getData() {
          this.$ajax({
            method: 'get',
            url:getCustomerHistoryOrder()+this.type,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.data1 = res.data.data;
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
      },
    }
</script>

<style scoped>
  .shopList{
    overflow: auto;
  }
</style>
