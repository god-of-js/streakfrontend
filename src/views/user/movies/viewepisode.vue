<template>
  <div class="movie_page pt-4 no_overflow" :key="movie.videoUrl">
    <div
      class="movie_display m-3 mt-0  pl-0 pr-4 p-0 pb-3 no_overflow"
      :key="episodeNumber"
    >
      <div class="container">
        <video controls class="movie_half">
          <source :src="getEpisode[0].video_url" />
        </video>
      </div>
      <div
        class="d-flex mb-2 pl-4 justify-content-between pr-4"
        :key="episodeNumber"
      >
        <div class="title_view">
          {{ `Episode ${getEpisode[0].episodeNumber}` }}
        </div>
        <div class="title_view">
          <button class="trans_btn small_icon">
            <i class="mdi mdi-thumb-up"> </i><span class="font_sm"> 900</span>
          </button>
          <button class="trans_btn small_icon">
            <i class="mdi mdi-thumb-down"> </i>
            <span class="font_sm mb-2"> 900</span>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="text-left pl-5 mr-5 pt-0 sub_heading">
        Other Episodes:
      </div>
      <div
        class="row p-1 d-flex justify-content-center"
        :key="moviesCollection.length"
      >
        <usermovie
          v-for="(movie, index) in getSeason[0].episodes"
          :key="index"
          :name="`Episode ${movie.episodeNumber}`"
          :movie="movie"
          :img="movie.img_url"
          :func="changeEpisodes"
          :video="movie.video_url"
          :id="movie._id"
          :rating="movie.rating"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "episode",
  mounted() {
    let vueApp = this;
    let id = this.$router.history.current.params.seriesid;
    let episodeNumber = this.$router.history.current.params.episodeid;
    vueApp.$store.commit("movies/setEpisodeNumber", episodeNumber);
    vueApp.$store.dispatch("movies/getSingleSeries", { id, vueApp });
  },
  computed: {
    ...mapState({
      movie: state => state.movies.movie,
      moviesCollection: state => state.movies.moviesCollection,
      episodeNumber: state => state.movies.episodeNumber
    }),
    ...mapGetters({
      getEpisode: "movies/getEpisode",
      getSeason: "movies/getSeason"
    })
  },
  methods: {
    changeEpisodes(movie) {
      this.$store.commit("movies/setEpisodeNumber", movie.episodeNumber);
      let seriesId = this.$router.history.current.params.seriesid;
      let seasonId = this.$router.history.current.params.seasonid;
      this.$router.push({
        name: "user-view-episode",
        params: {
          seriesid: seriesId,
          seasonid: seasonId,
          episodeid: movie.episodeNumber
        }
      });
    }
  }
};
</script>
