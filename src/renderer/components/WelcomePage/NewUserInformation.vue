<template>
  <div>
    <h1 class="title is-2">{{ message }}</h1>
    <h4 class="title is-4">{{ slogan }}</h4>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        message: `Welcome, to ${Vue.appInfo.name}!`,
        slogan: `Your phone system.`
      }
    }
  }
</script>
