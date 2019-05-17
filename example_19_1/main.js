import Vue from 'vue/dist/vue.js'
import App from './src/app.vue'

var vm = new Vue({
    el: "root",
    crender: function (createElement) {
        return createElement(App);
    }
});
