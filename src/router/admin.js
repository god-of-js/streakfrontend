import adminlayout from "../layouts/adminlayout.vue";
import videoupload from "../views/admin/video/uploadvideo.vue";
import uploadseries from "../views/admin/video/uploadseries.vue";
import movies from "../views/admin/video/movies.vue";
import anime from "../views/admin/video/anime.vue";
import addserie from "../views/admin/video/addserie.vue";
import series from "../views/admin/video/series.vue";
import seriesview from "../views/admin/video/seriesview.vue";
import settings from "../views/admin/adminapp/settings.vue";
import dashboard from "../views/admin/adminapp/dashboard.vue";
import users from "../views/admin/adminapp/users.vue";
export default [
  {
    path: "/adminlayout",
    component: adminlayout,
    name: "Admin Layout",
    children: [
      {
        path: "/video-upload",
        component: videoupload,
        name: "Video-Upload"
      },
      {
        path: "/admin-view-movies",
        component: movies,
        name: "movies"
      },
      {
        path: "/series-upload",
        component: uploadseries,
        name: "movies"
      },
      {
        path: "/admin-settings",
        component: settings,
        name: "Admin-Settings"
      },
      {
        path: "/admin-view-anime",
        component: anime,
        name: "Anime"
      },
      {
        path: "/admin-view-series",
        component: series,
        name: "Series"
      },
      {
        path: "/admin-view-series=:id",
        component: seriesview,
        name: "Series"
      },
      {
        path: "/add-season_serie-id=:id",
        component: addserie,
        name: "Series"
      },
      {
        path: "/admin-dashboard",
        component: dashboard,
        name: "Admin-Dashboard"
      },
      {
        path: "/users",
        component: users,
        name: "Users"
      }
    ]
  }
];
