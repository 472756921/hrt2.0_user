<template>
    <div class="dev" ref="dev">
      <div class="head">我的云设备</div>

      <div>
        <div class="title">血糖仪 <Icon type="plus-round" @click.native='add(1)'></Icon></div>
        <div class="noMessage" v-if="t.length == 0"><Icon type="social-buffer"></Icon> 暂无设备</div>
        <div v-for="(it, i) in t" class="devList"><Icon type="minus-circled" class="delBtn" @click.native="delDev(it, i, t)"></Icon> 编号：{{it.couldId}} <span class="date">{{it.createDate}}</span></div>
      </div>
      <div>
        <div class="title">血压计 <Icon type="plus-round" @click.native='add(2)'></Icon></div>
        <div class="noMessage" v-if="x.length == 0"><Icon type="social-buffer"></Icon> 暂无设备</div>
        <div v-for="(it, i) in x" class="devList"><Icon type="minus-circled" class="delBtn" @click.native="delDev(it, i, x)"></Icon> 编号：{{it.couldId}} <span class="date">{{it.createDate}}</span></div>
      </div>

      <Modal v-model="addDevF" title="添加设备" @on-ok="addDev">
        <RadioGroup v-model="devClass">
          <Radio label="2">
            <span>血糖仪</span>
          </Radio>
          <Radio label="1">
            <span>血压计</span>
          </Radio>
        </RadioGroup>
        <img src="../../../img/xt.png" width="60%" style="display: block;margin: 0 auto" v-if="devClass==2"/>
        <img src="../../../img/xy.png" width="60%" style="display: block;margin: 0 auto" v-if="devClass==1"/>
        <Input v-model="devNumver" :maxlength=15>
          <span slot="prepend">设备编号（SN码）</span>
        </Input>
      </Modal>

    </div>
</template>

<script>
  import { getByCustomerCouldEquipments, deleteCouldEquipment, addCouldEquipment } from '../../../interface';

    export default {
      name: "dev",
      data() {
        return{
          devClass: 2,
          addDevF: false,
          devNumver: '',
          t: [],
          x: [],
        }
      },
      mounted() {
        this.$refs.dev.style.height = window.screen.availHeight+'px';
        this.getList();
      },
      methods: {
        delDev(obj, i, list) {
          let type = obj.type==0?'血糖仪':'血压计';
          let c = confirm("确认删除 " + type + " 设备 " + obj.couldId + " 号?");
          if (c) {
            this.$ajax({
              method: 'delete',
              url:deleteCouldEquipment() + obj.id,
              dataType: 'JSON',
              contentType: 'application/json;charset=UTF-8',
            }).then((res) => {
              if(res.data.code == 0){
                this.$Message.success('删除成功');
                list.splice(i, 1);
              }
            }).catch((error) => {
              this.$Message.error('获取失败');
            });
          }
        },
        add(type) {
          this.addDevF = true;
          this.devClass = type;
          this.devNumver = '';
        },
        addDev() {
          if (this.devNumver == '') {
            this.$Message.warning('请输入设备编号');
            return false;
          } else {
            this.$ajax({
              method: 'post',
              url:addCouldEquipment(),
              dataType: 'JSON',
              data: {
                couldId: this.devNumver,
                type: this.devClass,
              },
              contentType: 'application/json;charset=UTF-8',
            }).then((res) => {
              if(res.data.code == 0){
                this.$Message.success('添加成功');
                if (this.devClass == 2) {
                  this.t.push({couldId: this.devNumver, createDate:  new Date().pattern("yyyy-MM-dd"), type: 2, id: res.data.data});
                }
                if (this.devClass == 1) {
                  this.x.push({couldId: this.devNumver, createDate:  new Date().pattern("yyyy-MM-dd"), type: 1, id: res.data.data});
                }
              }
            }).catch((error) => {
              this.$Message.error('获取失败');
            });

          }
        },
        getList() {
          this.$ajax({
            method: 'get',
            url:getByCustomerCouldEquipments(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            let list = Object.values(res.data.data);
            list.map((it, i)=>{
              it.createDate = it.createDate.split(' ')[0];
              if(it.type == 1) {
                this.t.push(it);
              }
              if(it.type == 2) {
                this.x.push(it);
              }
            })
          }).catch((error) => {
            this.$Message.error('获取失败');
          });
        },
      },
    }
</script>

<style scoped>
  .dev{
    background: #85cbfe;
    padding: .6rem;
  }
  .dev .head {
    font-weight: 600;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
  .title{
    color: #ffffff;
    margin: .4rem 0;
    font-size: 1rem;
  }
  .title i{
    float: right;
  }
  .noMessage{
    text-align: center;
    color: #eee;
    line-height: 2rem;
  }
  .dev .date{
    float: right;
  }
  .devList{
    color: #fff;
    line-height: 2rem;
  }
  .delBtn{
    font-size: .8rem;
    color: #DD4E00;
  }
</style>
