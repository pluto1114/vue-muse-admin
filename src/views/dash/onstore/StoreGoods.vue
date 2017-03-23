<template>
  <div class="storegoods">
    <mu-flexbox>
      <mu-flexbox-item class="flex-demo">
        <Chart width="100%" height="650px" :option="optionMap" theme='infographic' @chartClick="handleMapClick"></Chart>
      </mu-flexbox-item>
      <Chart width="500px" height="650px" :option="option2"></Chart>
    </mu-flexbox>  
    
    
     
    <div class="row">
        <div class="col-sm-1">包含类型</div>
        <div class="col-sm-11">
          
            <mu-checkbox name="group" v-for="x of types" :nativeValue="x.code" :key="x.code" v-model="selTypes" :label="x.name" class="type-checkbox" @change="handleChange"/> 
        </div>
            
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
        types:[],
        selTypes:[]
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
        this.types.forEach((item)=>{
            this.selTypes.push(item.code)
        })
    });
    
    
  },
  methods:{
  	handleMapClick(params){
  		console.log("hover",params)
  	},
    handleChange(){
        console.log(this.selTypes)
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
    padding: 1.8em;
    margin-right: 2em;
}
.row{
    margin-top: 1.5em;  
}
.type-checkbox{
    margin-right: 1em;   
}
</style>
