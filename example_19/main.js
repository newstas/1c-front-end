var Vue = require("vue");
var Search = require("./search.vue");

var vm = new Vue({
    el: "body",
    data: {
        text: ""
    },
    components: {
        search: Search
    },
    events: {
        find: function(query) {
            this.text = query;
            return true;
        }
    }
});
