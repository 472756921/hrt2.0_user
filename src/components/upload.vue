<template>
  <Upload :action="uploadImgs()" style="margin: 10px 0" :on-success="handleSuccess" class="upload" :show-upload-list=false>
    <Button type="warning" icon="ios-cloud-upload-outline" long @click="addDataF=true" style="margin-top: .4rem" :disabled="dlength>=num">上传图片</Button>
  </Upload>
</template>
<script>
  import { uploadImg } from '../interface';

  export default {
    props: ['type', 'dlength', 'num'],
    created(){
      this.text = '上传图片';
    },
    data() {
      return {
        text: '',
        ag: false,
      }
    },
    methods: {
      uploadImgs() {
        return uploadImg();
      },
      handleSuccess(res) {
        this.$emit('getImgUrl', res.data.id, res.data.url, this.type);
      },
    }
  }
</script>
<style>
  .upload .ivu-upload{
    width: 100%;
  }
</style>
<style scoped>
  .imgContent{
    width: 300px;
    height: 200px;
  }
</style>
