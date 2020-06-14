import authlayout from "../layouts/authlayout.vue";
import register from "../views/auth/register.vue";
import login from "../views/auth/login.vue";

export default [
  {
    path: "/",
    component: authlayout,
    name: "auth-layout",
    children: [
      {
        path: "/register",
        component: register,
        name: "register"
      },
      {
        path: "/",
        component: login,
        name: "login"
      }
    ]
  }
];
