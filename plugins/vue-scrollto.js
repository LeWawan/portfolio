import Vue from 'vue'
var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo, {
     container: "body",
     duration: 1000,
     easing: "ease-in-out",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
