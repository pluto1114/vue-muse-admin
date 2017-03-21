<template>
  <div class="">
    
    <mu-sub-header>阳光</mu-sub-header>
    <mu-content-block>
    <Chart width="100%" height="650px" :option="optionMap" theme='infographic'></Chart>
    </mu-content-block> 
    

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
        optionMap:{}
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
                left: 'right',
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
    });
    // search();
    
    
  },
  methods:{
  	handleHover(){
  		console.log("hover")
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
	
}

</style>
