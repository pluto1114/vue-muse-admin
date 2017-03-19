import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import _ from 'lodash'

var querystring = require('querystring');

Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

Vue.use(Vuex)
const moduleA = {
  state: {mm:"I'm a mm"},
  mutations: {},
  actions: {},
  getters: {}
}

const onstore = {
  state: {},
  mutations: {},
  actions: {
    storeGoods_map(context){
        var p=Vue.http.get("/api/storeGoodsChart/map");
        p.then(resp=>{
          console.log(resp.data);
        },resp=>{
          console.log("request error");
        });
        return p;
    }
  }
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    onstore
  }
})

export default store