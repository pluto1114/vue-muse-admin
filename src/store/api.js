
import Vue from 'vue'
import VueResource from 'vue-resource'
var querystring = require('querystring');

Vue.use(VueResource)



export function search () {
    var p=Vue.http.get("/api/storeGoodsChart/map");
    console.log("p",p)
    p.then(resp=>{
      console.log(resp.data);
    },resp=>{
      console.log("request error");
    });
    return p;
}
