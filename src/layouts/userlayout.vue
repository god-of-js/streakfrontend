<template>
  <div class="d-flex h_100">
    <sidebar class="col-2 sidebar_responsive" :arr="paths" />
    <div class="col-lg-10 col-sm-12 col-md-12 admin_body h_100 p-0 overflow">
      <navbar />
      <div class="route_body overflow">
        <router-view></router-view>
      </div>
      <appfoot :routes="paths" />
    </div>
  </div>
</template>
<script>
import sidebar from "../components/admin/components/adminsidebar.vue";
import navbar from "../components/user/components/navbar.vue";
export default {
  data: () => {
    return {
      paths: [
        {
          name: "HOME",
          path: "/movie-list",
          icon: "/img/dashboard.png"
        },
        {
          name: "LIBRARY",
          path: "/library",
          icon: "/img/library.svg"
        },
        {
          name: "HISTORY",
          path: "/history",
          icon: "/img/history.svg"
        },
        {
          name: "SERIES",
          path: "/series",
          icon: "/img/series.svg"
        }
      ]
    };
  },
  components: {
    sidebar,
    navbar
  }
};
</script>
<style lang="scss">
@import "../style/user.scss";
@import "../style/userresponsive.scss";
</style>
