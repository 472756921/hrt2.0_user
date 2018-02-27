<template>
    <div class="dataimg" ref="dataimg">
      <div class="heads">健康数据趋势图</div>
      <div id="main"></div>
    </div>
</template>

<script>
    export default {
      name: "data-img",
      mounted() {
        this.$refs.dataimg.style.height = window.screen.availHeight+'px';
        let data = this.$route.params.data;
        let time=[];
        let bloodSugar = [];
        let heartRate = [];
        let highPressure = [];
        let lowPressure = [];
        data.map((it, i) => {
          console.log(it);
          time.push(it.testTime);
          bloodSugar.push(it.bloodSugar);
          heartRate.push(it.heartRate);
          highPressure.push(it.highPressure);
          lowPressure.push(it.lowPressure);
        })
        let echarts = require('echarts');
        var myChart = echarts.init(document.getElementById('main'));
        let option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['高压','低压','血糖','心率'],
            top: 20,
            orient: 'horizontal'
          },
          grid: {
            left: '1rem',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: time,
          },
          yAxis: {
            type: 'value'
          },
          dataZoom: [{
            type: 'inside',
            start: 10,
            end: 30
          }, {
            start: 10,
            end: 30,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '70%',
            handleStyle: {
              color: '#fea85d',
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
            {
              name:'高压',
              type:'line',
              stack: '高压',
              data: highPressure,
            },
            {
              name:'低压',
              type:'line',
              stack: '低压',
              data: lowPressure,
            },
            {
              name:'血糖',
              type:'line',
              stack: '血糖',
              data: bloodSugar,
            },
            {
              name:'心率',
              type:'line',
              stack: '心率',
              data: heartRate,
            },
          ]
        };

        myChart.setOption(option);
      },
    }
</script>

<style scoped>
  .dataimg{
    background: #85cbfe;
  }
  #main{
    width: 100%;
    height: 300px;
  }
  .heads {
    font-weight: 600;
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    padding: .6rem 0;
  }
</style>
