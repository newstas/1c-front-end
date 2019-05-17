var Vue = require("vue");
var ParCap = require("./par-cap.vue");

var vm = new Vue({
    el: "body",
    data: {
        maessage: "Hello, components!"
    },
    components: {
        parCap: ParCap
    }
});
