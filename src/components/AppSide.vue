<template>
  <div class="app-side">
  	
  	<mu-drawer :open="open">
  	  <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
      <router-link to="/" class="exmaples-appbar-title" style="display:inline-block;">主数据平台</router-link>
  	    <mu-badge content="2017" class="exmaples-version" secondary/>
  	  </mu-appbar>
  	  <mu-divider/>
      <mu-list @change="handleMenuChange" :value="menuVal">
        <mu-list-item :title="'在库物资分析'" toggleNested>
          <mu-icon value="home" slot="left"/>
          <mu-list-item slot="nested" value="#/onstore/storeGoods" :title="'当前库存统计'"/>
          <mu-list-item slot="nested" value="#/colors" :title="'采购订单分析'"/>
        </mu-list-item>

        <mu-list-item :title="'在建物资分析'" toggleNested>
          <mu-icon value="equalizer" slot="left"/>
          <mu-list-item slot="nested" value="#/appbar" title="App Bar"/>
          <mu-list-item slot="nested" value="#/autoComplete" title="Auto Complete"/>
         
          <mu-list-item slot="nested" value="#/pagination" title="Pagination"/>
          <mu-list-item slot="nested" value="#/picker" title="Picker"/>
          <mu-list-item slot="nested" value="#/popup" title="Popup"/>
          <mu-list-item slot="nested" value="#/refreshControl" title="Refresh Control"/>
        </mu-list-item>
        <mu-list-item :title="'历史资源分析'" toggleNested>
          <mu-icon value="timer" slot="left"/>
          <mu-list-item slot="nested" :title="'changeLog'" value="#/changeLog"/>
          <mu-list-item slot="nested" :title="'contributing'" value="#/contributing"/>
        </mu-list-item>
      </mu-list>
    </mu-drawer> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'appSide',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      menuVal:0
    } 
  },
  methods: {
    handleMenuChange(val){
      this.menuVal = val
      
      window.location.hash = this.menuVal
      
      this.$emit('menu-change', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
@import "../../src/styles/import.less";
.exmaples-drawer{
  box-shadow: none;
  border-right: 1px solid @borderColor;
}

.exmaples-nav-appbar.mu-appbar{
  background-color: @dialogBackgroundColor;
  color: @secondaryTextColor;
}
.exmaples-appbar-title{
  color: @secondaryTextColor;
  text-decoration: none;
  outline: none;
  a:hover{color:#cacdd6;}
}



.my-title{
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.mu-paper-2{
  box-shadow:none;
}
</style>