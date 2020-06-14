export default {
  getMovies({ commit }, { vueApp }) {
    vueApp.$axios
      .get(vueApp.$store.state.app.apiUrl + "/api/v1/admin/get-admin-videos")
      .then(response => {
        console.log(response);
        commit;
      });
  }
};
