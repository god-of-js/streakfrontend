export default {
  getSeason: state => {
    return state.serie.seasons.filter(x => x._id === state.seasonId);
  },
  getEpisode: (state, getters) => {
    return getters.getSeason[0].episodes.filter(
      x => x.episodeNumber === state.episodeNumber
    );
  }
};
