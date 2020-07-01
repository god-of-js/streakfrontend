<template>
  <div class="movie_page pt-4 no_overflow" :key="movie.videoUrl">
    <div
      class="movie_display m-3 mt-0  pl-0 pr-4 p-0 pb-3 no_overflow"
      :key="movie.title"
    >
      <div class="container">
        <video controls class="movie_half" :key="movie.videoUrl">
          <source :src="movie.videoUrl" />
        </video>
      </div>
      <div
        class="d-flex mb-2 pl-4 justify-content-between pr-4"
        :key="movie.title"
      >
        <div class="title_view">{{ $format(movie.title) }}</div>
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
      <div class="text-left movie_description pl-5 col-10">
        {{ movie.description }}
      </div>
    </div>
    <div>
      <div class="text-left pl-5 mr-5 pt-0 sub_heading">
        If you like {{ $format(movie.title) }}, You would love:
      </div>
      <div
        class="row p-1 d-flex justify-content-center"
        :key="moviesCollection.length"
      >
        <usermovie
          v-for="(movie, index) in moviesCollection"
          :key="index"
          :views="movie.view"
          :name="movie.title"
          :movie="movie"
          :img="movie.imgUrl"
          :func="watchMovie"
          :video="movie.videoUrl"
          :id="movie._id"
          :rating="movie.rating"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "movie",
  mounted() {
    let vueApp = this;
    let id = this.$router.history.current.params.id;
    vueApp.$store.dispatch("movies/getMovies", { vueApp });
    vueApp.$store.dispatch("movies/fetchSingleMovie", { id, vueApp });
  },
  computed: {
    ...mapState({
      movie: state => state.movies.movie,
      moviesCollection: state => state.movies.moviesCollection
    })
  },
  methods: {
    watchMovie(movie) {
      this.$router.push({ name: "user-movie", params: { id: movie._id } });
      this.$store.commit("movies/setMovie", movie);
    }
  }
};
</script>
