<template>
  <div class="footer  red">
    <div v-for="path in routes" :key="path.name" class="col-3">
      <div
        :id="path.name"
        @click="setActiveClass(path)"
        :class="
          $router.history.current.fullPath === path.path
            ? inactive + ` active_footer `
            : inactive
        "
         :key="presentPath"
        style="width: 100%"
      >
        <img :src="path.icon" width="20" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    routes: Array
  },
  data: () => {
    return {
      inactive: " pt-2 pb-2 d-flex justify-content-center align-items-center ",
      presentPath: 'HOME'
    };
  },
  methods: {
    setActiveClass(path) {
      let id;
      for (let i = 0; i < this.routes.length; i++) {
        id = document.getElementById(this.routes[i].name);
        id.classList.remove("active_footer");
      }
      this.presentPath = path.name
      document.querySelector(`#${path.name}`).classList.add("active_footer");
        this.$router.push(path.path)
    }
  }
};
</script>
