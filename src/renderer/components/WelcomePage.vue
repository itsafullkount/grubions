<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-head">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <li><a>This is always at the top</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <new-user-information></new-user-information>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container">
        <div class="tabs is-centered">
          <ul>
            <li><a>bottom</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import NewUserInformation from './WelcomePage/NewUserInformation'

  export default {
    name: 'welcome-page',
    components: { NewUserInformation },
    created: function () {
      // wanted to make sure that we have a db
      // would be a good place to bootstrap the db for the first run
      console.log(Vue.db)
    }
  }
</script>

<style>
</style>
