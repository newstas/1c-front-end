var vm = new Vue({
    el: "#app",
    data: {
        list: ["Создать домашние задания"],
        thing:""
    },
    methods: {
        addItem: function(event) {
                this.list.push(this.thing);
                this.thing = "";
        },
        removeItem: function(index) {
            this.list.splice(index, 1);
        }
    }
});
