<!-- атрибут scoped гарантирует, что
    стили будут действовать только
    в предлах данной компоненты  -->

<style scoped>
   h1 {
   color: blue;
   }
</style>

<template>
    <h1>{{ msg }}</h1>
</template>

<script>
   module.exports = {
      data: function() {
      /* у компоненты поле data должна быть
          функция, возращающая словарь данных */
      return {
         msg: "Hello, component!"
         };
      }
   };
</script>
