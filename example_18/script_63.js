var vm = new Vue({
    el: "#app",
    data: {
        firstString: "",
        secondString: "",
        changesCount: 0
    }
});

vm.$watch("firstString", function(newValue) {
    console.log(newValue);
    this.changesCount += 1;
});
