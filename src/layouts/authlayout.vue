<template>
  <div class="auth_page">
    <navbar />
    <div
      class="h_80 d-flex align-items-center pt-5 mt-5"
      style="overflow-y: auto;"
    >
      <div
        class="auth_box col-lg-4 mx-auto col-md-6 col-sm-8 box_shadow pt-4 pb-4 mb-4 mr-2 ml-2"
      >
        <div class="text-center">
          <bluestreak />
          <div class="font_sm">Welcome to Blue Streak</div>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "../components/auth/authnav.vue";
export default {
  name: "Auth",
  data: () => {
    return {
      componentId: "",
      btnClasses: "col p-2 ml-0"
    };
  },
  components: {
    navbar
  },
  mounted() {
    this.componentId = "login";
  }
};
</script>
<style lang="scss">
@import "../style/auth.scss";
@import "../style/authresponsive.scss";
</style>
