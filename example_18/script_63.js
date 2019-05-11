var vm = new Vue({
    el: "#app",
    data: {
        firstString: "",
        secondString: "",
        changesCount: 0
    }
});

/* в учебнике написано по-другому
vm.$watch("[firstString, secondString}", function(newValue) {
но так мы получаем ошибку */

vm.$watch("firstString", function(newValue) {
    console.log(newValue);
    this.changesCount += 1;
});
