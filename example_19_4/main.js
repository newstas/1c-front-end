var Vue = require("vue");
var Header = require("./header.vue");

var vm = new Vue({
    el: "#root",
    components: {
        cTag: Header
    }
});
