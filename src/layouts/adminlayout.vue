<template>
  <div class="d-flex h_100">
    <sidebar class="col-2" :arr="paths" />
    <div class="col-10 admin_body h_100 p-0 overflow">
      <navbar />
      <div class="route_body overflow">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "../components/admin/components/adminsidebar.vue";
import navbar from "../components/admin/components/adminnavbar.vue";
export default {
  data: () => {
    return {
      paths: [
        {
          name: "DASHBOARD",
          path: "/admin-dashboard",
          icon: "/img/dashboard.png"
        },
        {
          name: "USERS",
          path: "/users",
          icon: "/img/users.png"
        },
        {
          name: "MOVIES",
          path: "/admin-view-movies",
          icon: "/img/movies.png"
        },
        {
          name: "SERIES",
          path: "/admin-view-series",
          icon: "/img/series.svg"
        },
        {
          name: "ANIME",
          path: "/admin-view-anime",
          icon: "/img/anime.png"
        },
        {
          name: "SETTINGS",
          path: "/admin-settings",
          icon: "/img/settings.png"
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
@import "../style/admin.scss";
@import "../style/adminresponsive.scss";
</style>
