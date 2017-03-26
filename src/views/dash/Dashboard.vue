<template>
  <div class="dashboard">
    <!-- cards -->
    <div class="row cards">
      
      <div class="card-container col-lg-3 col-sm-6 col-sm-12">
        <Card type="card-redbrown" title="Users" icon="fa-users"></Card>
      </div>


      <div class="card-container col-lg-3 col-sm-6 col-sm-12">
         <Card type="card-blue" title="Orders" icon="fa-shopping-cart"></Card>
      </div>



      <div class="card-container col-lg-3 col-sm-6 col-sm-12">
         <Card type="card-greensea" title="Sales" icon="fa-usd"></Card>
      </div>


      <div class="card-container col-lg-3 col-sm-6 col-xs-12">
         <Card type="card-slategray" title="Visits" icon="fa-eye"></Card>
      </div>


    </div>
    <!-- /cards -->
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="400px" :option="option1"></Chart>
      </mu-flexbox-item>
      <Chart width="500px" height="400px" :option="option2"></Chart>
    </mu-flexbox>

    <div class="chip-container">
      <mu-chip v-for="x of qmenu" class="my-chip" :key="x.value">
        <span @click="handleQmenuClick(x.value)">{{x.title}}</span>
      </mu-chip>
    </div>

    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="400px" :option="option3"></Chart>
      </mu-flexbox-item>
    </mu-flexbox>       
    
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="600px" :option="option4"></Chart>
      </mu-flexbox-item>
      <Chart width="600px" height="600px" :option="option5"></Chart>
    </mu-flexbox>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Chart from '@/components/Chart'
import _ from 'lodash'
export default {
  name: 'dashboard',
  data () {
    return {

      option1:{
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
      },
      option2:{
        title: { text: '饼图示例' },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:400, name:'搜索引擎'},
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'}
                ]
            }
        ]
      },
      option3:{
        title: { text: '示例' },
        tooltip: {},
        xAxis: {
           data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"] 
        },
        yAxis: {
          
        },
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      },
      option4:{},
      option5:{},
      qmenu:[]
    }
  },
  mounted(){
  	var showData=[{"name":"巴彦淖尔市","id":"9","value":"6846408.27"},{"name":"包头市","id":"3","value":"20756444.65"},{"name":"锡林郭勒盟","id":"12","value":"3740828.70"},{"name":"通辽市","id":"6","value":"24034986.07"},{"name":"鄂尔多斯市","id":"7","value":"9427434.06"},{"name":"乌兰察布市","id":"10","value":"8348110.78"},{"name":"乌海市","id":"4","value":"1478744.56"},{"name":"阿拉善盟","id":"13","value":"5701429.99"},{"name":"赤峰市","id":"5","value":"1927185.03"},{"name":"呼和浩特市","id":"2","value":"4555370.88"},{"name":"兴安盟","id":"11","value":"2156001.30"},{"name":"呼伦贝尔市","id":"8","value":"2575386.51"}];

    this.option3={
        title: { text: '示例' },
        tooltip: {},
        xAxis: {
           data: _.map(showData,"name")
        },
        yAxis: {
          
        },
        series: [{
            name: '库存金额',
            type: 'bar',
            data: _.map(showData,"value")
        }]
    }

    var data = [
        [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
        [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
    ];

    this.option4 = {
        
        title: {
            text: '1990 与 2015 年各国家人均寿命与 GDP'
        },
        legend: {
            right: 10,
            data: ['1990', '2015']
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series: [{
            name: '1990',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
                }
            }
        }, {
            name: '2015',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                    }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                    }])
                }
            }
        }]
    };

    this.option5 = {
        title: {
            text: '雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            indicator: [
               { name: '销售（sales）', max: 6500},
               { name: '管理（Administration）', max: 16000},
               { name: '信息技术（Information Techology）', max: 30000},
               { name: '客服（Customer Support）', max: 38000},
               { name: '研发（Development）', max: 52000},
               { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配（Allocated Budget）'
                },
                 {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    this.qmenu=[{title:"当前库存统计",value:"#/onstore/storeGoods"},{title:"出库物资分析",value:"#/colors"},{title:"物资使用分析",value:"#/colors"},{title:"物资类型分析",value:"#/colors"},{title:"排行榜",value:"#/colors"},{title:"在建项目物资分析",value:"#/colors"},{title:"归档项目物资分析",value:"#/colors"}]
  },
  methods:{
  	handleHover(){
  		console.log("hover")
  	},
    handleQmenuClick(value){
      console.log(value)
      this.$root.$emit('menu-change', value)
    }
  },
  components:{
  	Card,Chart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.dashboard{
	padding:20px;

  .chip-container{
    margin:1em 0.6em;
    .my-chip{
      margin-right: 1.8em;
      padding: 0.4em 0.8em;
    }
  }
}

</style>
