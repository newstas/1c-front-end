var Vue = require("vue");
var App = require("./app.vue");

var vm = new Vue({
    el: "#root",
    crender: function (createElement) {
        return createElement(App);
    }
});
