import adminlayout from "../layouts/adminlayout.vue";
import videoupload from "../views/admin/video/uploadvideo.vue";
import uploadseries from "../views/admin/video/uploadseries.vue";
import movies from "../views/admin/video/movies.vue";
import anime from "../views/admin/video/anime.vue";
import addserie from "../views/admin/video/addseason.vue";
import series from "../views/admin/video/series.vue";
import seriesview from "../views/admin/video/seriesview.vue";
import addepisode from "../views/admin/video/addepisode.vue";
import episodes from "../views/admin/video/episodes.vue";
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
        name: "moviesUpload"
      },
      {
        path: "/add-episode/:seriesid/:seasonid",
        component: addepisode,
        name: "addepisode"
      },
      {
        path: "/episodes/:seriesid/:seasonid",
        component: episodes,
        name: "episodes"
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
        path: "/admin-view-series-seasons/:id",
        component: seriesview,
        name: "series-view",
        params: true
      },
      {
        path: "/add-season-series/:id",
        component: addserie,
        name: "addSeries"
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
