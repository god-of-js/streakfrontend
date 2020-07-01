<template>
  <div class="">
    <div
      class="movie_cover d-flex  align-items-center p-3 "
      :style="`background-image: url(${serie.imgUrl})`"
    >
      <img :src="serie.imgUrl" class="ml-3" />
      <div class="movie_preview_text ml-4 text-left">
        <div class="large_title mb-2">{{ $format(serie.title) }}</div>
        <div class="cast text-left mb-2">{{ $format(serie.cast) }}</div>
        <div class="desc mt-2">{{ serie.description }}</div>
      </div>
    </div>
    <div class="md_text text-left ml-3 mb-0 pb-0">Seasons</div>
    <div class="row ml-3 mr-3 ">
      <usermovie
        v-for="(season, index) in serie.seasons"
        :key="index"
        :views="50"
        :name="`Season ${season.season}`"
        :img="season.img_url"
        :video="season.video_url"
        :rating="7"
        :movie="season"
        :id="season._id"
        :func="viewEpisodes"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      serie: state => state.movies.serie
    })
  },
  mounted() {
    let id = this.$router.history.current.params.id,
      vueApp = this;
    this.$store.dispatch("movies/getSingleSeries", { id, vueApp });
  },
  methods: {
    viewEpisodes(movie) {
      console.log(movie);
      let seriesId = this.$router.history.current.params.id;
      this.$router.push({
        name: "user-view-season",
        params: { seriesid: seriesId, seasonid: movie._id }
      });
    }
  }
};
</script>
