export default {
  getMovies({ commit }, { vueApp }) {
    vueApp.$axios
      .get(
        vueApp.$store.state.app.apiUrl + "/api/v1/movie/get-movies",
        vueApp.$store.state.user.token
      )
      .then(response => {
        commit("setMovies", response.data.movies);
      });
  },
  getSeries({ commit }, { vueApp }) {
    console.log(vueApp);
    vueApp.$axios
      .get(
        vueApp.$store.state.app.apiUrl + "/api/v1/movie/get-series",
        vueApp.$store.state.user.token
      )
      .then(response => {
        console.log(response.data.series);
        commit("setSeries", response.data.series);
      });
  },
  getRecentlyAddedMovies({ commit }, { vueApp }) {
    vueApp.$axios
      .get(
        vueApp.$store.state.app.apiUrl +
          "/api/v1/movie/get-recently-added-movies",
        vueApp.$store.state.user.token
      )
      .then(response => {
        commit("setRecentMovies", response.data.movies);
      });
  },
  getRecentlyAddedSeries({ commit }, { vueApp }) {
    vueApp.$axios
      .get(
        vueApp.$store.state.app.apiUrl +
          "/api/v1/movie/get-recently-added-series",
        vueApp.$store.state.user.token
      )
      .then(response => {
        commit("setRecentSeries", response.data.series);
      });
  },
  fetchSingleMovie({ commit }, { id, vueApp }) {
    vueApp.$axios
      .get(
        vueApp.$store.state.app.apiUrl +
          `/api/v1/movie/get-single-movie?q=${id}`,
        vueApp.$store.state.user.token
      )
      .then(response => {
        commit("setMovie", response.data[0]);
      });
  },
  getSingleSeries({ commit }, { id, vueApp }) {
    vueApp.$axios
      .get(
        vueApp.$store.state.app.apiUrl +
          `/api/v1/movie/get-single-serie?q=${id}`,
        vueApp.$store.state.user.token
      )
      .then(response => {
        response.data[0].seasons = response.data.seasons;
        commit("setSerie", response.data[0]);
      })
      .catch(err => console.log(err));
  }
};
