import authlayout from "../layouts/authlayout.vue";
import register from "../views/auth/register.vue";
import login from "../views/auth/login.vue";

export default [
  {
    path: "/auth-layout",
    component: authlayout,
    name: "auth-layout",
    children: [
      {
        path: "/register",
        component: register,
        name: "register"
      },
      {
        path: "/login",
        component: login,
        name: "login"
      }
    ]
  }
];
