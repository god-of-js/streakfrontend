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
    console.log(this.$store.state.user.token);
    console.log(this.$store.state.user.user);
  }
};
</script>
