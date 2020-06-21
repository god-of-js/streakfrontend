export default {
  getMovies({ commit }, { vueApp }) {
    vueApp.$axios
      .get(vueApp.$store.state.app.apiUrl + "/api/v1/admin/get-admin-videos")
      .then(response => {
        commit("setMovies", response.data.movies);
      });
  },
  getRecentlyAddedMovies({ commit }, { vueApp }) {
    vueApp.$axios
      .get(
        vueApp.$store.state.app.apiUrl +
          "/api/v1/admin/get-admin-recently-added-movies"
      )
      .then(response => {
        commit("setRecentMovies", response.data.movies);
      });
  }
};
