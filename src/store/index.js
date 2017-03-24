import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import {api} from './api'
import _ from 'lodash'

var querystring = require('querystring');
var remote=true;

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
  state: {
    selTypes:[],
    map_comp_id:1
  },
  mutations: {
    selTypes(state,payload) {
        state.selTypes = payload.selTypes;
    }
  },
  actions: {
    storeGoodsChart_map(context,payload){
      let mock={"url":"/api/storeGoodsChart/map","ok":true,"status":200,"statusText":"OK","headers":{"map":{"pragma":["no-cache"],"Date":["Sun, 19 Mar 2017 10:47:34 GMT"],"server":["Jetty(8.y.z-SNAPSHOT)"],"X-Powered-By":["Express"],"Transfer-Encoding":["chunked"],"content-type":["application/json; charset=UTF-8"],"cache-control":["no-cache"],"connection":["close"],"expires":["Thu, 01 Jan 1970 00:00:00 GMT"]}},"body":{"errCode":"0","itemMap":{"curValues":[{"name":"巴彦淖尔市","id":"9","value":"6846408.27"},{"name":"包头市","id":"3","value":"20756444.65"},{"name":"锡林郭勒盟","id":"12","value":"3740828.70"},{"name":"通辽市","id":"6","value":"24034986.07"},{"name":"鄂尔多斯市","id":"7","value":"9427434.06"},{"name":"乌兰察布市","id":"10","value":"8348110.78"},{"name":"乌海市","id":"4","value":"1478744.56"},{"name":"阿拉善盟","id":"13","value":"5701429.99"},{"name":"赤峰市","id":"5","value":"1927185.03"},{"name":"呼和浩特市","id":"2","value":"4555370.88"},{"name":"兴安盟","id":"11","value":"2156001.30"},{"name":"呼伦贝尔市","id":"8","value":"2575386.51"}]},"message":"全区库存分布","items":[]},"bodyBlob":{},"bodyText":{"promise":{}}};
      return remote?api('/api/storeGoodsChart/map',{params:payload}):Promise.resolve(mock);
    },
    storeGoodsChart_goodstype(context){
      let mock={};
      return remote?api('/api/storeGoodsChart/goodstype'):Promise.resolve(mock);
    },
    storeGoodsChart_items(context,payload){
      let mock={};
      return remote?api('/api/storeGoodsChart/items',{params:payload}):Promise.resolve(mock);
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