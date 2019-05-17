<template>
    <input type="text" v-model="query" v-on:keydown.enter="sendQuery">
    <button type="button" v-on:click="sendQuery">Найти!</button>
</template>

<script>
    module.exports = {
        data: function() {
            return { query: "" };
        },
        methods: {
            sendQuery: function() {
                /* рассылка сообщения find */
                this.$dispatch("find", this.query);
            }
        }
    }
</script>
