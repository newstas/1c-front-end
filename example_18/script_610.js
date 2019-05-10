var vm = new Vue({
    el: "#app",
    data: {
        list: ["Создать домашние задания"],
        thing:""
    },
    methods: {
        addItem: function(event) {
            if(event.which == 13) {
                this.list.push(this.thing);
                this.thing = "";
            }
        },
        removeItem: function(index) {
            this.list.splice(index, 1);
        }
    }
});
