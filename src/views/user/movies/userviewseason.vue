<template>
  <div class="">
    <div
      class="movie_cover d-flex  align-items-center p-3 "
      :style="`background-image: url(${getSeason[0].img_url})`"
    >
      <img :src="getSeason[0].img_url" class="ml-3" width="300" />
      <div class="movie_preview_text ml-4 text-left">
        <div class=" mb-2 large_title">{{ $format(serie.title) }}</div>
        <div class="sub_heading ml-2" :key="getSeason.length">
          Season {{ getSeason[0].season }}
        </div>
        <div class="desc mt-2">{{ serie.description }}</div>
      </div>
    </div>
    <div class="md_text text-left ml-3 mb-0 pb-0">Episodes</div>
    <div class="row ml-3 mr-3 ">
      <usermovie
        v-for="(season, index) in getSeason[0].episodes"
        :key="index"
        :views="50"
        :name="`Episode ${season.episodeNumber}`"
        :img="season.img_url"
        :video="season.video_url"
        :rating="7"
        :id="season._id"
        :movie="season"
        :func="viewEpisodes"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      serie: state => state.movies.serie
    }),
    ...mapGetters({
      getSeason: "movies/getSeason"
    })
  },
  mounted() {
    let id = this.$router.history.current.params.seriesid,
      seasonId = this.$router.history.current.params.seasonid,
      vueApp = this;
    this.$store.commit("movies/setSeasonId", seasonId);
    this.$store.dispatch("movies/getSingleSeries", { id, vueApp });
  },
  methods: {
    viewEpisodes(movie) {
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
