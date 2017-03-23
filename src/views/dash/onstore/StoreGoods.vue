<template>
  <div class="storegoods">
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="650px" :option="optionMap" theme='infographic' @chartClick="handleMapClick"></Chart>
      </mu-flexbox-item>
      <Chart width="500px" height="650px" :option="option2"></Chart>
    </mu-flexbox>  
    
    
     
    <div class="row">
        
        <mu-checkbox name="group" v-for="x of types" :nativeValue="x.code" v-model="types" :label="x.name" class="type-checkbox"/>      
    </div>

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
        option2:{},
        types:[]
    }
  },
  computed:mapState(['moduleA']),
  mounted(){
    console.log(this.moduleA.mm)
    this.$store.dispatch("storeGoodsChart_map").then((resp)=>{
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
    
    this.$store.dispatch("storeGoodsChart_goodstype").then((resp)=>{
        this.types=resp.body.items;

    });
    
    
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
.row{
    margin-top:4em;
}
.type-checkbox{
    margin:1em;
    
}
</style>
