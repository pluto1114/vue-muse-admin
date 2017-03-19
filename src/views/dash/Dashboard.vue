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

    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="400px" :option="option3"></Chart>
      </mu-flexbox-item>
    </mu-flexbox>       
    

  </div>
</template>

<script>
import Card from '@/components/Card'
import Chart from '@/components/Chart'
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
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted(){
  	
  },
  methods:{
  	handleHover(){
  		console.log("hover")
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
}

</style>
