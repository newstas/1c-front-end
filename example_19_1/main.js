import Vue from "vue";
import App from "./app.vue";

var vm = new Vue({
    el: "root",
    crender: function (createElement) {
        return createElement(App);
    }
});
