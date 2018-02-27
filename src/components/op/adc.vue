<template>
    <div class="adc">
      <Row :gutter="10">
        <Col span="3">
          <div class="title">
            <div>活动</div>
            <div class="btn">通告</div>
          </div>
        </Col>
        <Col span="21">
          <div class="content">
            <ul>
              <li v-for="(it ,i) in list" :key="i" v-if="i<=show && i>show-2" @click="datile(it)">{{it.title}}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
</template>

<script>
    import { getList } from  '../../interface';

    export default {
      name: "adc",
      data() {
        return {
          list: [],
          num: '',
          show: 1,
        };
      },
      created() {
        this.$ajax({
          method: 'GET',
          url:getList(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.list = res.data.data.content;
          this.num = this.list.length;
          setInterval(()=>{
            if(this.show+2 > this.num) {
              this.show = 1;
            } else {
              this.show += 2;
            }
          }, 4000);
        }).catch((error) => {
          this.$Message.error('获取公告列表失败');
        });
      },
      methods: {
        datile(it) {
          this.$router.push({name: 'datile', params:{data: it}})
        },
      },
    }
</script>

<style scoped>
  .adc {
    padding: .4rem;
  }
  .adc .title{
    line-height: 1.4rem;
    text-align: center;
  }
  .adc .btn{
    color: #fff;
    border-radius: 2px;
    background: #43a3f0;
  }
  .adc .content{
    border-left: 1px solid #eee;
    padding-left: .4rem;
    line-height: 1.4rem;
    text-align: left;
    letter-spacing: .1rem;
  }
  .content li {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
    color: #666;
  }
</style>
