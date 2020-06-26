<template>
  <div>
    <div>
      <div
        class=" pl-5 ml-5 mr-5 pr-5 pt-3 sub_heading d-flex justify-content-between align-items-center"
      >
        <span class="ml-4">History </span>
        <router-link to="/history" class="mr-4 font_sm">See all</router-link>
      </div>
      <div class="d-flex row d-flex justify-content-center p-2">
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
    <div>
      <div
        class=" pl-5 ml-5 mr-5 pr-5 pt-3 sub_heading d-flex justify-content-between align-items-center"
      >
        <span class="ml-4">Liked movies </span>
        <router-link to="/history" class="mr-4 font_sm">See all</router-link>
      </div>
      <div class="d-flex row d-flex justify-content-center p-2">
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
    <div>
      <div
        class=" pl-5 ml-5 mr-5 pr-5 pt-3 sub_heading d-flex justify-content-between align-items-center"
      >
        <span class="ml-4">Watch Later </span>
        <router-link to="/history" class="mr-4 font_sm">See all</router-link>
      </div>
      <div class="d-flex row d-flex justify-content-center p-2">
        <usermovie
          v-for="(movie, index) in moviesCollection"
          :key="index"
          :views="movie.view"
          :name="movie.title"
          :movie="movie"
          :img="movie.imgUrl"
          :video="movie.videoUrl"
          :id="movie._id"
          :func="watchMovie"
          :rating="movie.rating"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      movies: [
        {
          name: "fantastic four",
          img: "/img/fantastic4.jpg",
          rating: 5,
          view: 700
        },
        {
          name: "indecent exposure",
          img: "/img/indecentexposure.jpg",
          rating: 4,
          view: 240
        },
        {
          name: "jumanji",
          img: "/img/jumanji.jpg",
          rating: 3,
          view: 900
        },
        {
          name: "mocking jay",
          img: "/img/mockingjay.jpeg",
          rating: 5,
          view: 0
        },
        {
          name: "monster hunter",
          img: "/img/monsterhunter-1.jpg",
          rating: 0,
          view: 400
        },
        {
          name: "spiderman",
          img: "/img/spiderman.jpg",
          rating: 5,
          view: 500
        },
        {
          name: "tombraider",
          img: "/img/tombraider.jpg",
          rating: 5,
          view: "1.5k"
        },
        {
          name: "what happens",
          img: "/img/whathappensjpg.jpg",
          rating: 5,
          view: "40k"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      moviesCollection: state => state.movies.moviesCollection,
      recentlyAddedMovies: state => state.movies.recentlyAddedMovies
    })
  },
  mounted() {
    this.$store.dispatch("movies/getMovies", { vueApp: this });
    this.$store.dispatch("movies/getRecentlyAddedMovies", {
      vueApp: this
    });
  },
  methods: {
    watchMovie(movie) {
      this.$router.push({ name: "user-movie", params: { id: movie._id } });
    }
  }
};
</script>
