<template>
  <div id="wrapper">
    hi!
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'welcome-page',
    created: function () {
      console.log(Vue.db)
    }
  }
</script>

<style>
</style>
