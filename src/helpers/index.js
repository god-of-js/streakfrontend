const errorNot = (msg, vueApp) => {
  let error = {
    position: "topRight"
  };
  vueApp.$toast.error(msg, "Error", error);
};
const successNot = (msg, vueApp) => {
  let position = {
    position: "topRight"
  };
  vueApp.$toast.success(msg, "Success", position);
};

const videoCheck = file => {
  if (!file.type.startsWith("video")) {
    return false;
  } else {
    return true;
  }
};
const imgCheck = file => {
  if (!file.type.startsWith("image")) {
    return false;
  } else {
    return true;
  }
};
const post = async (
  url,
  data,
  vueApp,
  callback = () => {},
  type = null,
  finish = () => {}
) => {
  await vueApp.$axios
    .post(
      vueApp.$store.state.app.apiUrl + url,
      data,
      vueApp.$store.state.user.token
    )
    .then(result => {
      vueApp.$successNot(result.data.message, vueApp);
      if (type === "series_add") {
        vueApp.$router.push({
          name: "series-view",
          params: { id: result.data.data.savedSeries._id }
        });
      }
      if (type === "season_add") {
        vueApp.$router.push({
          name: "series-view",
          params: { id: result.data.data.seriesId }
        });
      }

      finish();
    })
    .catch(err => {
      vueApp.$errorNot(err.response.data.message, vueApp);
    })
    .finally(() => {
      callback();
    });
};
let Delete = (apiUrl, data, vueApp, callback = () => {}) => {
  let headers = vueApp.$store.state.user.config.headers;
  vueApp.$axios
    .delete(vueApp.$store.state.app.apiUrl + apiUrl, {
      data,
      headers
    })
    .then(result => {
      vueApp.$openNotification(
        "Success",
        result.data.message,
        "success",
        vueApp
      );
    })
    .catch(err => {
      vueApp.$openNotification(
        "Error",
        err.response.data.message,
        "error",
        vueApp
      );
    })
    .finally(() => {
      callback();
    });
};
const format = (str = " ") => {
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
export { errorNot, successNot, post, Delete, format, imgCheck, videoCheck };
