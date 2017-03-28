<template>
  <div class="main">
    <app-side @change="handleMenuChange" @close="toggleNav" :open="open" :docked="docked" />
    <div class="app-right" :class="{'app-right-open' : open}">
      <mu-appbar :zDepth="0" :title="title" class="example-appbar" :class="{'nav-hide': !open}">
        <mu-icon-button icon='menu' slot="left" @click="toggleNav"/>
        <mu-flat-button color="white" label="flat Button" slot="right"/>
      </mu-appbar>
      
      <div class="example-content" :class="{'nav-hide': !open}">
        <transition name="fade"  mode="out-in">
          <router-view class="main-content"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import appSide from '@/components/AppSide'

export default {
  data () {
    const desktop = isDesktop()
    return {
      open: desktop,
      docked: desktop,
      desktop: desktop,
      title: ''
    }
  },
  mounted () {
    this.routes = this.$router.options.routes
    this.setTitle()
    this.changeNav()
    this.handleResize = () => {
      this.changeNav()
    }
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('hashchange', () => {
      this.setTitle()
    })
    
    this.$root.$on("menu-change",(hash)=>{
      console.log('hash')
      window.location.hash = hash
    })
    
  },
  methods: {
    toggleNav () {
      this.open = !this.open
    },
    changeNav () {
      const desktop = isDesktop()
      this.docked = desktop
      if (desktop === this.desktop) return
      if (!desktop && this.desktop && this.open) {
        this.open = false
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true
      }
      this.desktop = desktop
    },
    handleMenuChange (path) {
      if (!this.desktop) this.open = false
    },
    setTitle () {
      let path = window.location.hash
    
      if (path && path.length > 1) path = path.substring(1)
      console.log("path:"+path)  
      for (let i = 0; i < this.routes.length; i++) {
        var route = this.routes[i]
        // console.log("route.path",route.path)
        if (route.path === path) {
          this.title = route.description
          return
        }
        if(route.children && route.children.length>0){
          route.children.forEach((item,index)=>{
            if (path.indexOf(item.path)>0) {
              this.title = item.description
              return
            }
          });
        }
      }
    },
    toIndex(){
      this.$router.push("/");
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  components:{
    appSide
  }
}

function isDesktop () {
  return window.innerWidth > 993
}
</script>

<style lang="less">
@import "../../src/styles/import.less";
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
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(20px);
  opacity: 0;
}

.main-content{
  padding: 1.8em;
}
</style>
