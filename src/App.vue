<template>
  <div id="app">
    <loader v-if="loader === true" />
    <router-view />
  </div>
</template>
<script>
import loader from "./components/loader.vue";
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      loader: state => state.app.loader
    })
  },
  components: {
    loader
  }
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0% !important;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
