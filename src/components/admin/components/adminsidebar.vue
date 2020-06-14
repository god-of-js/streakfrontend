<template>
  <nav class="admin_sidebar h_100 p-0">
    <div class="text-left pt-4 pl-2">
      <bluestreak />
    </div>
    <ul class="pt-5 pl-0 pr-0 ">
      <li
        @click="setActiveClass(path)"
        v-for="(path, index) in paths"
        :key="index"
        :class="
          $router.history.current.fullPath === path.path
            ? inactiveClass + 'active'
            : inactiveClass
        "
        :id="path.name"
      >
        <img :src="path.icon" alt="BlueStreak icon" class="mr-3" width="23" />
        <span>{{ path.name }}</span>
      </li>
    </ul>
  </nav>
</template>
<script>
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
          name: "Users",
          path: "/users",
          icon: "/img/users.png"
        },
        {
          name: "Movies",
          path: "/admin-view-movies",
          icon: "/img/movies.png"
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
      ],
      inactiveClass: "text-left pl-3 p-2 d-flex align-items-center mt-4 "
    };
  },
  beforeMount() {
    console.log();
  },
  methods: {
    setActiveClass(path) {
      let id;
      for (let i = 0; i < this.paths.length; i++) {
        id = document.getElementById(this.paths[i].name);
        id.classList.remove("active");
      }
      document.querySelector(`#${path.name}`).classList.add("active");
      this.$router.push(path.path);
    }
  }
};
</script>
