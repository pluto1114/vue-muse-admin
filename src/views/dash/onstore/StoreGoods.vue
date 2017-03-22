<template>
  <div class="storegoods">
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="650px" :option="optionMap" theme='infographic' @chartClick="handleMapClick"></Chart>
      </mu-flexbox-item>
      <Chart width="500px" height="650px" :option="option2"></Chart>
    </mu-flexbox>  
    
    
     
    

  </div>
</template>

<script>
import Chart from '@/components/Chart'
import { mapState } from 'vuex';
import {search} from '@/store/api'
export default {
  name: 'storegoods',
  data () {
    return {
        optionMap:{},
        option2:{
            title: { text: '饼图示例' },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['55%','75%'],
                    data:[
                        {value:400, name:'搜索引擎'},
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'}
                    ]
                }
            ]
        }
    }
  },
  computed:mapState(['moduleA']),
  mounted(){
    console.log(this.moduleA.mm)
    this.$store.dispatch("storeGoods_map").then((resp)=>{
        this.optionMap = {
            title: {
                text: resp.message,
                //subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data:['当前量']
            },
            visualMap: {
                min: 0,
                max: 30000000,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'left',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '当前量',
                    type: 'map',
                    mapType: '内蒙古',
                    roam: true,
                    zoom:1.26,
                    label: {
                        normal: {
                            show: true,
                           
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:resp.body.itemMap.curValues
                }
            ]
        };

        this.option2={
            title: { text: '地区占比' },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
                {
                    name: '占比情况',
                    type: 'pie',
                    // radius: ['55%','75%'],
                    data:resp.body.itemMap.curValues
                }
            ]
        }
    });
    // search();
    
    
  },
  methods:{
  	handleMapClick(params){
  		console.log("hover",params)
  	},
    randomData() {
        return Math.round(Math.random()*1000);
    }
  },
  components:{
  	Chart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.storegoods{
	padding-top: 1.8em;
}

</style>
