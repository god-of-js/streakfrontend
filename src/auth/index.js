const regApiUrl = "/api/v1/users/register-user";
const loginApiUrl = "/api/v1/auth/login";
export default {
  reg: async (userData, vueApp, finish = () => {}) => {
    await vueApp.$axios
      .post(vueApp.$store.state.app.apiUrl + regApiUrl, userData)
      .then(result => {
        vueApp.$store.commit('user/setUser', result.data.data)
        vueApp.$store.commit('user/setJwt', result.data.jwt)
        vueApp.$successNot(result.data.message, vueApp);
        console.log(result.data)
        vueApp.$router.push("/admin-dashboard");
        
      })
      .catch(err => {
        vueApp.$errorNot(err.response.data.message, vueApp);
      })
      .finally(() => {
        vueApp.$store.state.app.loader = false;
        finish();
      });
  },
  login: async (userData, vueApp, finish = () => {}) => {
    await vueApp.$axios
      .post(vueApp.$store.state.app.apiUrl + loginApiUrl, userData)
      .then(result => {
        vueApp.$store.commit('user/setUser', result.data.data)
        vueApp.$store.commit('user/setJwt', result.data.jwt)
        vueApp.$successNot(result.data.message, vueApp);
        vueApp.$router.push("/admin-dashboard");
      })
      .catch(err => {
        console.log(err.response);
        vueApp.$errorNot(err.response.data.message, vueApp);
        finish();
      })
      .finally(() => {
        vueApp.$store.state.app.loader = false;
      });
  }
};
