<template>
    <div class="item_content" ref="ITC" @click="push">
      <Row>
        <Col span="2" style="float: left;text-align: left"><Icon style="font-size: 1.2rem;" :type=message.icon></Icon></Col>
        <Col span="20">{{message.message}}</Col>
        <Col span="2" style="float: right;text-align: right"><Icon type="chevron-right"></Icon></Col>
      </Row>
    </div>
</template>

<script>
    export default {
      name: "item",
      props: ['message'],
      methods: {
        push() {
          if( this.message.url == 'userDate') {
            this.$Message.error('暂未开放，敬请期待');
            return false;
          }
          this.$router.push({path: this.message.url});
        },
      }
    }
</script>

<style scoped>
  .item_content{
    font-size: .8rem;
    line-height: 1.8rem;
    padding: .6rem 1rem;
    color: rgba(1, 133, 185, 0.8);
    border-bottom: 1px dashed #eeeeee;
  }
  .item_content:last-child {
    border-bottom: none;
  }
</style>
