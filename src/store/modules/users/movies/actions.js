export default {
  fetchSingleMovie({ commit }, {url, vueApp }) {
    vueApp.$axios
      .get(vueApp.$store.state.app.apiUrl + `/api/v1/admin/get-single-movie?q=${url}`, vueApp.$store.state.user.token)
      .then(response => {
        console.log(response);
        commit("setMovie", response.data[0]);
      });
  }
};
