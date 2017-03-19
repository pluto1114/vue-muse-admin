<template>
  <div class="app">
 
        <transition name="fade"  mode="out-in">
          <router-view></router-view>
        </transition>
      
  </div>
</template>

<script>


export default {
  data () {
    const desktop = isDesktop()
    return {
      desktop: desktop
    }
  },
  mounted () {
    
    
  },
  methods: {
    
  }
}

function isDesktop () {
  return window.innerWidth > 993
}
</script>

<style lang="less">
@import "../src/styles/import.less";
.app-right{
  transition: all .35s;

}
.app-right-open{
  margin-left: 256px;
}
.app-right-close{
  margin-left: 0px;
}
         


@media (min-width: 480px) {
  .example-content{
    padding: 10px;
  }
}

@media (max-width: 993px) {
  .example-appbar {
    left: 0;
  }
  .example-content{
    padding-left: 0;
  }
  .content-wrapper {
    padding: 24px 36px;
  }
  .app-right{
    margin-left: 0px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
