<template>
  <div class="buy-goods">
  	<mu-flexbox class="years">
  	  <h4>采购时间：</h4>
      <mu-flexbox-item class="flex-demo">
        <mu-radio name="group" v-for="x of years" :nativeValue="x" :key="x" v-model="selTime" :label="x" class="year-item" @change="handleChange"/>
      </mu-flexbox-item>
    </mu-flexbox>

    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="500px" :option="option" theme='infographic' @chartClick="handleMonthClick"></Chart>
      </mu-flexbox-item>
      <Chart width="500px" height="500px" :option="optionType"></Chart>
    </mu-flexbox>   
  </div>
</template>

<script>
import Chart from '@/components/Chart'
import { mapState } from 'vuex';
import _ from 'lodash'
var itemStyle={
	    normal: {
	        color: new echarts.graphic.LinearGradient(
	            0, 0, 0, 1,
	            [
	                {offset: 0, color: '#83bff6'},
	                {offset: 0.5, color: '#188df0'},
	                {offset: 1, color: '#188df0'}
	            ]
	        )
	    },
	    emphasis: {
	        color: new echarts.graphic.LinearGradient(
	            0, 0, 0, 1,
	            [
	                {offset: 0, color: '#2378f7'},
	                {offset: 0.7, color: '#2378f7'},
	                {offset: 1, color: '#83bff6'}
	            ]
	        )
	    }
	}
export default {
  name: 'buyGoods',
  data () {
    return {
    	years:['2017','2016','2015'],
    	selTime:"2016",
    	option:{},
    	optionType:{},
    	types:[]
    }
  },
  watch:{
    'selTime':'fresh'
  },
  mounted(){
  	this.fresh()
  },
  methods:{
  	handleChange(){

  	},
  	fresh(){
	  	this.$store.dispatch("buyGoodsChart_year",{year:this.selTime}).then((resp)=>{
	        this.option = {
			    title: {
			        text: '全年采购物资'
			    },
			    tooltip: {},
			    xAxis: {
			        data: _.map(resp.body.items,"name")
			    },
			    yAxis: {
			        
			    },
			    series: [
			        {
			            type: 'bar',
			            itemStyle:itemStyle,
			            data: _.map(resp.body.items,"amount")
			        }
			    ]
			};
	    });
	    this.$store.dispatch("buyGoodsChart_goodstype",{year:this.selTime}).then((resp)=>{
	  		this.types=resp.body.items;
	        this.optionType = {
			    title: { text: '类型占比' },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
		        series : [
		            {
		                name: '物资金额',
		                type: 'pie',
		                radius: '55%',
		                data:resp.body.items
		            }
		        ]
			};
	    });
  	},
  	handleMonthClick(params){
  		if(params.name.length==7){
	  		this.$store.dispatch("buyGoodsChart_month",{month:params.name}).then((resp)=>{
		        this.option = {
				    title: {
				        text: params.name+'采购物资'
				    },
				    tooltip: {},
				    xAxis: {
				        data: _.map(resp.body.items,"name")
				    },
				    yAxis: {
				        
				    },
				    series: [
				        {
				            type: 'bar',
				            itemStyle: itemStyle,
				            data: _.map(resp.body.items,"amount")
				        }
				    ]
				};
		    });
		    this.$store.dispatch("buyGoodsChart_goodstype",{month:params.name}).then((resp)=>{
		    	this.optionType = {
				    title: { text: '类型占比' },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
			        series : [
			            {
			                name: '物资金额',
			                type: 'pie',
			                radius: '55%',
			                data:resp.body.items
			            }
			        ]
				};
		    });
		}
		if(params.name.length==10){
			this.$store.dispatch("buyGoodsChart_day",{day:params.name}).then((resp)=>{
		        this.option = {
				    title: {
				        text: params.name+'采购物资'
				    },
				    tooltip: {},
				    xAxis: {
				        data: _.map(resp.body.items,"name")
				    },
				    yAxis: {
				        
				    },
				    series: [
				        {
				            type: 'bar',
				            itemStyle: itemStyle,
				            data: _.map(resp.body.items,"amount")
				        }
				    ]
				};
		    });
		    this.$store.dispatch("buyGoodsChart_goodstype",{day:params.name}).then((resp)=>{
		    	this.optionType = {
				    title: { text: '类型占比' },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
			        series : [
			            {
			                name: '物资金额',
			                type: 'pie',
			                radius: '55%',
			                data:resp.body.items
			            }
			        ]
				};
		    });
		}
  	}
  },
  components:{
  	Chart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.buy-goods{
	.years{
		margin: 1em 0.4em;
	}
	.year-item{
		width:8em;
	}
}
</style>
