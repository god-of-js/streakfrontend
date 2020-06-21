import userlayout from "../layouts/userlayout.vue";
import movies from "../views/user/movies/movies.vue";
import movie from "../views/user/movies/movie.vue";
import library from "../views/user/movies/library.vue";
import series from "../views/user/movies/series.vue";
import history from "../views/user/movies/history.vue";
import anime from "../views/user/movies/anime.vue";

export default [
  {
    path: "/userlayout",
    component: userlayout,
    name: "Admin Layout",
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
        path: `/view-movie_viewkey=:id`,
        component: movie,
        name: "user-movie"
      }
    ]
  }
];
