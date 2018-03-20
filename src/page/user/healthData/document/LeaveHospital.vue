<template>
  <div class="leave-hospital" ref="leave_hospital">
    <div class="title">出院证明</div>
    <img :src="'http://www.schrtinfo.com'+it.imageUrl"  width="100%" v-for="(it, i) in data"/>
    <uploadImg :dlength="data.length" :num="2" @getImgUrl="imgUpSuccess"/>
  </div>
</template>

<script>
  import { getByCustomerCustomerHasImages, addCustomerHasImage } from '../../../../interface';
  import uploadImg from '../../../../components/upload';

    export default {
      name: "leave-hospital",
      components: { uploadImg, },
      mounted() {
        this.$refs.leave_hospital.style.height = window.screen.availHeight+'px';
        this.getData();
      },
      data() {
        return {
          data: [],
        };
      },
      methods: {
        imgUpSuccess(id, url) {
          this.$ajax({
            method: 'post',
            url:addCustomerHasImage(),
            data: {
              "imageId": id,
              "type": 0
            },
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.$Message.success('上传成功');
            this.data.push({id: id, imageUrl: url});
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
        getData() {
          this.$ajax({
            method: 'get',
            url:getByCustomerCustomerHasImages()+0,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.data = res.data.data;
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
      },
    }
</script>

<style scoped>
  .leave-hospital{
    background: #85cbfe;
    padding: .4rem;
    color: #fff;
  }
  .leave-hospital .title {
    font-weight: 600;
    background: #85cbfe;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
</style>
