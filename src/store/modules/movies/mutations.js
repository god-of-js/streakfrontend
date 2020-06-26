export default {
  setMovies(state, collection) {
    state.moviesCollection = collection;
  },
  setSeries(state, collection) {
    state.seriesCollection = collection;
  },
  setRecentMovies(state, collection) {
    state.recentlyAddedMovies = collection;
  },
  setRecentSeries(state, collection) {
    state.recentlyAddedSeries = collection;
  },
  setMovie(state, movie) {
    state.movie = movie;
  },
  setSerie(state, serie) {
    state.serie = serie;
  }
};
