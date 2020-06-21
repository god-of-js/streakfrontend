export default {
  setMovies(state, collection) {
    state.moviesCollection = collection;
  },
  setRecentMovies(state, collection) {
    state.recentlyAddedMovies = collection;
  }
};
