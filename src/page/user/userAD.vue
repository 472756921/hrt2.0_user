<template>
    <div class="userAD" ref="userAD">
      <div class="title">我的健康管理师</div>
      <div class="ADlist">
        <div class="AD" v-for="(it, i) in AD">
          <div class="head">
            <Row :gutter="16">
              <Col span="8" style="height: 100px;overflow: hidden"><img :src="'http://118.31.38.185'+it.icon.url" width="100%" style="border-radius: 4px;"/></Col>
              <Col span="16">
                <div class="ad_name">{{it.name}}</div>
                <div class="teamName">{{it.teams}}</div>
                <div class="intxt" @click="show(it.remarks, 'http://118.31.38.185'+it.icon.url)">管理师个人资料</div>
              </Col>
            </Row>
          </div>
          <div class="info">
            <Col span="12">
              <div style="color: #999;">联系电话：{{it.phone}}</div>
            </Col>
            <Col span="12">
              <div style="text-align: right"><Button type="success" size="small" icon="ios-telephone"><a :href="'tel:'+it.phone" style="color: #fff">呼叫</a></Button></div>
            </Col>
          </div>
        </div>
      </div>

      <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#368ec6;text-align:center;font-size: 1rem">
          <Icon type="information-circled"></Icon>
          <span>健康管理师个人资料</span>
        </p>
        <div>
          <img :src="ADIMG" width="50%" style="display: block;margin: .4rem auto"/>
          <p>{{ADData}}</p>
        </div>
        <div slot="footer">
          <Button type="primary" size="large" long  @click="modal2=false">关闭</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
  import { getCustomerHealthTeachers } from '../../interface';
    export default {
      name: "user-a-d",
      created() {
        this.getData();
      },
      mounted() {
        this.$refs.userAD.style.height = window.screen.availHeight+'px';
      },
      data() {
        return {
          modal2: false,
          AD: [],
          ADData: '',
          ADIMG: '',
        };
      },
      methods: {
        show(data, img) {
          this.modal2 = true;
          this.ADData = data;
          this.ADIMG = img;
        },
        getData() {
          this.$ajax({
            method: 'get',
            url:getCustomerHealthTeachers(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.AD = res.data.data;
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
      },
    }
</script>

<style scoped>
  .userAD{
    background: #85cbfe;
    padding: .4rem 0;
  }
  .userAD .title {
    font-weight: 600;
    background: #85cbfe;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .userAD .ADlist{
    padding: 1rem;
  }
  .ADlist .AD{
    background: #fff;
    border-radius: 4px;
    overflow: auto;
    box-shadow: 0 1px 10px #666;
    margin-bottom: 1rem;
  }
  .ADlist .AD .head{
    padding: .6rem;
    background: #fff;
  }
  .ADlist .info{
    padding: .6rem;
    overflow: auto;
    background: #f3f4f6;
  }
  .ADlist .AD .ad_name{
    font-size: 1.2rem;
  }
  .ADlist .AD .intxt{
    color: #45a3ec;
  }
  .ADlist .teamName{
    padding: .2rem 0;
    color: #c63318;
  }
</style>
