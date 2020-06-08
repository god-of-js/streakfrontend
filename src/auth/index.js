const regApiUrl = "/api/v1/users/register-user";
const loginApiUrl = "/api/v1/auth/login";
export default {
  reg: async (userData, vueApp, finish = () => {}) => {
    await vueApp.$axios
      .post(vueApp.$store.state.app.state.apiUrl + regApiUrl, userData)
      .then(result => {
        vueApp.$successNot(result.data.message, vueApp)
        vueApp.$router.push('/view-movies')
      })
      .catch(err => {
        vueApp.$errorNot(
          err.response.data.message,
          vueApp
        );
      })
      .finally(() => {
                vueApp.$store.state.app.state.loader = false;
        finish();
      });
  },
  login: async (userData, vueApp, finish = () => {}) => {
    await vueApp.$axios
      .post(vueApp.$store.state.app.state.apiUrl + loginApiUrl, userData)
      .then(result => {
        console.log(result)
        vueApp.$successNot(result.data.message, vueApp)
        vueApp.$router.push("/dashboard");
      })
      .catch(err => {
        console.log(err.response)
        vueApp.$errorNot(
          err.response.data.message,
          vueApp
        );
        finish();
      }).finally(() => {
        
        vueApp.$store.state.app.state.loader = false;
      });
  }
};
