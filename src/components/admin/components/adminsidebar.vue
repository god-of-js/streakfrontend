<template>
  <nav class="admin_sidebar h_100 p-0">
    <div class="text-left pt-4 pl-2">
      <bluestreak />
    </div>
    <ul class="pt-5 pl-0 pr-0 ">
      <li
        @click="setActiveClass(path)"
        v-for="(path, index) in arr"
        :key="index"
        :class="
          $router.history.current.fullPath === path.path
            ? inactiveClass + 'active'
            : inactiveClass
        "
        :id="path.name"
      >
        <img
          :src="path.icon"
          alt="BlueStreak icon"
          style="color: #EAE8E8"
          class="mr-3 sidebar_icon"
          width="23"
        />
        <span>{{ path.name }}</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    arr: Array
  },
  data: () => {
    return {
      inactiveClass: "text-left pl-3 p-2 d-flex align-items-center mt-4 "
    };
  },
  beforeMount() {
  },
  methods: {
    setActiveClass(path) {
      let id;
      for (let i = 0; i < this.arr.length; i++) {
        id = document.getElementById(this.arr[i].name);
        id.classList.remove("active");
      }
      document.querySelector(`#${path.name}`).classList.add("active");
      this.$router.push(path.path);
    }
  }
};
</script>
