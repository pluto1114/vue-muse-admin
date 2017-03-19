<template>
  <div class="myecharts" :style="styleObject">
    
  </div>
</template>

<script>
var myChart;
export default {
  name: 'echarts',
  props:['width','height','option'],
  data () {
    return {
    	styleObject: {
		    width:this.width,
		    height:this.height
		  }
    }
  },
  watch:{
    'option':'fresh'
  },
  mounted(){
  	this.fresh()
  },
  methods:{
    fresh(){
      myChart = echarts.init(this.$el);
      myChart.setOption(this.option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myecharts{
	
}
</style>
