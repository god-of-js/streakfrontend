const regApiUrl = "/api/v1/users/register-user";
const loginApiUrl = "/api/v1/auth/login";
export default {
  reg: async (userData, vueApp, finish = () => {}) => {
    await vueApp.$axios
      .post(vueApp.$store.state.app.apiUrl + regApiUrl, userData)
      .then(result => {
        vueApp.$store.commit("user/setUser", result.data.data);
        vueApp.$store.commit("user/setJwt", result.data.jwt);
        vueApp.$successNot(result.data.message, vueApp);
        if (result.data.data.accountType === "admin")
          vueApp.$router.push("/admin-dashboard");
        else if (result.data.data.accountType === "user")
          vueApp.$router.push("/movie-list");
      })
      .catch(err => {
        vueApp.$errorNot(err.response.data.message, vueApp);
      })
      .finally(() => {
        vueApp.$store.commit("app/loaderStatus", false);
        finish();
      });
  },
  login: async (userData, vueApp, finish = () => {}) => {
    await vueApp.$axios
      .post(vueApp.$store.state.app.apiUrl + loginApiUrl, userData)
      .then(result => {
        vueApp.$store.commit("user/setUser", result.data.data);
        vueApp.$store.commit("user/setJwt", result.data.jwt);
        vueApp.$successNot(result.data.message, vueApp);
        if (result.data.data.accountType === "admin")
          vueApp.$router.push("/admin-dashboard");
        else if (result.data.data.accountType === "user")
          vueApp.$router.push("/movie-list");
      })
      .catch(err => {
        console.log(err.response);
        vueApp.$errorNot(err.response.data.message, vueApp);
        finish();
      })
      .finally(() => {
        vueApp.$store.commit("app/loaderStatus", false);
      });
  }
};
