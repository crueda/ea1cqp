<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
import store from '@/store/index.js'

export default {
  name: 'app',
  created () {
    store.commit('setUrl', process.env.VUE_APP_API_URL)
  },
}

</script>

<style lang="scss">
@import "../sass/main.scss";
@import "../css/icofont.css";

body {
  height: 100%;

  #app {
    height: 100%;
  }
}
</style>
