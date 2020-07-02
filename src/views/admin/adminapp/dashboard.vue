<template>
  <div></div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      apiUrl: state => state.app.apiUrl
    })
  },
  beforeMount() {
  }
};
</script>
