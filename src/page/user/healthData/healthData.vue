<template>
    <div class="healthData" ref="healthData">
      <div class="head">我的健康数据</div>
      <div class="items">
        <div class="item" v-for="(it, i) in data">
          <div style="color: #eee">{{it.testTime}}</div>
          <Row>
            <Col span="12" v-if="it.highPressure != null">高压：{{it.highPressure}} mmHg</Col>
            <Col span="12" v-if="it.lowPressure != null">低压：{{it.lowPressure}} mmHg</Col>
            <Col span="12" v-if="it.bloodSugar != null">血糖：{{it.bloodSugar}} mmol/L</Col>
            <Col span="12" v-if="it.heartRate != null">心率：{{it.heartRate}} 次/分</Col>
          </Row>
        </div>
      </div>

      <div class="addBtn">
        <Button type="success" long @click="push">趋势图</Button>
        <Button type="warning" long @click="addDataF=true" style="margin-top: .4rem">手动上传</Button>
      </div>

      <Modal v-model="addDataF" title="手动上传健康数据" @on-ok="addData" class="upload">
        <Input v-model="s_data.highPressure" :maheartRateength=5><span slot="prepend">高压</span><span slot="append">mmHg</span></Input>
        <Input v-model="s_data.lowPressure" :maheartRateength=5><span slot="prepend">低压</span><span slot="append">mmHg</span></Input>
        <Input v-model="s_data.bloodSugar" :maheartRateength=5><span slot="prepend">血糖</span><span slot="append">mmol/l</span></Input>
        <Input v-model="s_data.heartRate" :maheartRateength=5><span slot="prepend">心率</span><span slot="append">次 / 分</span></Input>
        <DatePicker type="datetime" placeholder="测量时间" v-model="s_data.testTime" style="width: 100%" :options="options" placement="top" :editable=false :transfer=true></DatePicker>
      </Modal>
    </div>
</template>

<script>
  import { getByCustomerHealthDatas, addHealthData } from '../../../interface';

  export default {
    name: "health-data",
    data() {
      return {
        addDataF: false,
        options: {
          disabledDate (date) {
            return date && date.valueOf() > Date.now();
          }
        },
        s_data: {
          testTime: '',
          highPressure: '',
          lowPressure: '',
          bloodSugar: '',
          heartRate:''
        },
        data: [],
      };
    },
    mounted() {
      this.$refs.healthData.style.height = window.screen.availHeight+'px';
      this.getList();
    },
    methods: {
      push() {
        this.$router.push({name: 'dataImg', params:{data: this.data}});
      },
      addData() {
        if(this.checkV()) {
          this.s_data.testTime = this.s_data.testTime.pattern("yyyy-MM-dd HH:mm:ss");
          this.$ajax({
            method: 'POST',
            url:addHealthData(),
            data: this.s_data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if(res.data.code == 0) {
              this.$Message.success('上传成功');
              this.s_data.testTime = this.s_data.testTime.pattern("yyyy-MM-dd HH:mm");
              this.data.push( this.s_data );
            }
          }).catch((error) => {
            this.$Message.error('获取失败');
          });

        }
      },
      checkV() {
        if ( this.s_data.testTime == '') {
          this.$Message.error('请选择测量时间');
          return false;
        }
        if (this.s_data.highPressure != '' && this.s_data.lowPressure == '') {
          this.$Message.error('请输入高压和低压');
          return false;
        }
        if (this.s_data.highPressure == '' && this.s_data.lowPressure != '') {
          this.$Message.error('请输入高压和低压');
          return false;
        }
        if (this.s_data.highPressure == '' && this.s_data.lowPressure == '' && this.s_data.bloodSugar == '' && this.s_data.heartRate == '') {
          this.$Message.error('请输入测量值');
          return false;
        }
        return true
      },
      getList() {
        this.$ajax({
          method: 'get',
          url:getByCustomerHealthDatas(),
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
  .addBtn{
    position: fixed;
    bottom: .6rem;
    width: calc(100% - 1.2rem);
  }
  .healthData{
    background: #85cbfe;
    padding: .6rem;
  }
  .healthData .head {
    font-weight: 600;
    color: #fff;
    tebloodSugar-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .items{
    height: calc(100% - 8rem);
    overflow: auto;
    box-shadow: 0 1px 10px #888;
    border-radius: .4rem;
    padding: .4rem;
  }
  .items .item{
    margin: .2rem 0;
    padding: .8rem;
    color: #ffffff;
    border-radius: .4rem;
    border-bottom: 1px dashed #eee;
  }
  .upload div {
    margin: .4rem 0;
  }
</style>
