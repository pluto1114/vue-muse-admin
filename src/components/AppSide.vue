<template>
  <div class="app-side">
  	
  	<mu-drawer :open="open">
  	  <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
  	    <a class="exmaples-appbar-title" href="/" style="display:inline-block;">播放历史</a>
  	    <mu-badge content="2017" class="exmaples-version" secondary/>
  	  </mu-appbar>
  	  <mu-divider/>
      <mu-list @change="handleMenuChange" :value="menuVal">
        <mu-list-item :title="'getStarted'" toggleNested>
          <mu-list-item value="#/install" slot="nested" :title="'installation'"/>
          <mu-list-item value="#/usage" slot="nested" :title="'usage'"/>
        </mu-list-item>
        <mu-list-item :title="'customization'" toggleNested>
          <mu-list-item slot="nested" value="#/theme" :title="'theme'"/>
          <mu-list-item slot="nested" value="#/colors" :title="'color'"/>
        </mu-list-item>

        <mu-list-item :title="'component'" toggleNested>
          <mu-sub-header slot="nested" class="exmaples-nav-sub-header">Material Design</mu-sub-header>
          <mu-list-item slot="nested" value="#/appbar" title="App Bar"/>
          <mu-list-item slot="nested" value="#/autoComplete" title="Auto Complete"/>
         
          <mu-list-item slot="nested" value="#/pagination" title="Pagination"/>
          <mu-list-item slot="nested" value="#/picker" title="Picker"/>
          <mu-list-item slot="nested" value="#/popup" title="Popup"/>
          <mu-list-item slot="nested" value="#/refreshControl" title="Refresh Control"/>
        </mu-list-item>
        <mu-list-item :title="'more'" toggleNested>
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
  computed:mapState(['hisSongArr']),
  methods: {
    handleClick(index){
      let song=this.hisSongArr[index];
      this.$router.push(`/player/${song.albumid}/${song.songid}/${song.songmid}`);
    },
    handleMenuChange(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
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
}

.my-title{
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
</style>