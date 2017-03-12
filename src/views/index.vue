<template>
  <div class="index tile-body">
    <!-- cards -->
    <div class="row cards">
      
      <div class="card-container col-lg-3 col-sm-6 col-sm-12">
        <Card type="card-redbrown" title="Users"></Card>
      </div>


      <div class="card-container col-lg-3 col-sm-6 col-sm-12">
         <Card type="card-blue" title="Orders"></Card>
      </div>



      <div class="card-container col-lg-3 col-sm-6 col-sm-12">
         <Card type="card-greensea" title="Sales"></Card>
      </div>


      <div class="card-container col-lg-3 col-sm-6 col-xs-12">
         <Card type="card-slategray" title="Visits"></Card>
      </div>


    </div>
    <!-- /cards -->
            
    <div id="myEcharts" style="width:600px;height:400px;"></div>

  </div>
</template>

<script>
var echarts = require('echarts');
import Card from '@/components/Card'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted(){
  	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('myEcharts'));
	// 绘制图表
	myChart.setOption({
	    title: { text: 'ECharts 示例' },
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
	});
  },
  methods:{
  	handleHover(){
  		console.log("hover")
  	}
  },
  components:{
  	Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../src/styles/vars.less";
.index{
	
}

</style>
