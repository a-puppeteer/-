var $ = require( "jquery" );
// import $ from "jquery";
// console.log($);
import './css/index.css'
// import './css/index.less'
// console.log($('.t'));
// console.log('23663');

class father {
  constructor(x,y){
    this.x = x
    this.y = y
  }
  sum(){
    console.log(this.x+this.y);
    
  }
}
 class son extends father{
  constructor(x,y){
    // this.x = x
    // this.y = y
    super(x,y)
  }
 }
// var jw = new father(5,6)
// var jwson = new son(8,9)
// jw.sum()
// jwson.sum()
// console.log(jwson,11);

//-------------------vue部分
import Vue from 'vue'
import App from './compoments/app.vue'
const vm = new Vue({
  el:'#app',
  render: h => h(App)
})