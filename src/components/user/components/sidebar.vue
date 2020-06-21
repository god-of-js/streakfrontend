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
