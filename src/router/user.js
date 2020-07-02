import userlayout from "../layouts/userlayout.vue";
import movies from "../views/user/movies/movies.vue";
import movie from "../views/user/movies/movie.vue";
import library from "../views/user/movies/library.vue";
import series from "../views/user/movies/series.vue";
import history from "../views/user/movies/history.vue";
import anime from "../views/user/movies/anime.vue";
import userviewserie from "../views/user/movies/userviewserie.vue";
import viewepisode from "../views/user/movies/viewepisode.vue";
import userviewseason from "../views/user/movies/userviewseason.vue";
export default [
  {
    path: "/userlayout",
    component: userlayout,
    name: "User-Layout",
    children: [
      {
        path: "/movie-list",
        component: movies,
        name: "movie-list"
      },
      {
        path: "/series",
        component: series,
        name: "series"
      },
      {
        path: "/anime",
        component: anime,
        name: "anime"
      },
      {
        path: "/history",
        component: history,
        name: "history"
      },
      {
        path: "/library",
        component: library,
        name: "library"
      },
      {
        path: `/view-movie/:id`,
        component: movie,
        name: "user-movie"
      },
      {
        path: "/view-season/:seriesid/:seasonid",
        component: userviewseason,
        name: "user-view-season"
      },
      {
        path: "/view-episode/:seriesid/:seasonid/:episodeid",
        component: viewepisode,
        name: "user-view-episode"
      },
      {
        path: "/view-series-seasons/:id",
        component: userviewserie,
        name: "user-view-series"
      }
    ]
  }
];
