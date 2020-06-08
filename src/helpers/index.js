const errorNot = (msg, vueApp) =>{
                let error = {
            position: "topRight"
          }
                vueApp.$toast.error(msg, 'Error', error)
}
const successNot = (msg, vueApp) =>{
                let position = {
            position: "topRight"
          }
                vueApp.$toast.success(msg, 'Success', position)
}

const imgCheck = file => {
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    return false;
  } else {
    return true;
  }
};
const post = async (url, data, vueApp, callback = () => {}) => {
  await vueApp.$axios
    .post(
      vueApp.$store.state.app.state.apiUrl + url,
      data,
      vueApp.$store.state.user.config
    )
    .then(result => {
      vueApp.$successNot(result.data.message, vueApp)
    })
    .catch(err => {
      vueApp.$successNot(
        err.response.data.message,
        vueApp
      );
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
export {
    errorNot,
    successNot,
    post,
    Delete,
    format,
    imgCheck
}