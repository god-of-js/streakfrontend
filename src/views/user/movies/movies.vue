<template>
  <div>
    <div>
      <div class="text-left pl-3 pt-3 sub_heading">My Library</div>
      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in moviesCollection"
          :key="index"
          :views="movie.view"
          :name="movie.title"
          :movie="movie"
          :img="movie.imgUrl"
          :video="movie.videoUrl"
          :id="movie._id"
          :rating="movie.rating"
        />
      </div>
    </div>
    <div>
      <div class="text-left pl-3 pt-3 sub_heading">Movies</div>
      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in movies"
          :key="index"
          :views="movie.view"
          :name="movie.name"
          :img="movie.img"
          :rating="movie.rating"
        />
      </div>
    </div>
    <div>
      <div class="text-left pl-3 pt-3 sub_heading">Anime</div>
      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in movies"
          :key="index"
          :views="movie.view"
          :name="movie.name"
          :img="movie.img"
          :rating="movie.rating"
        />
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-left pl-3 pt-3 sub_heading">Trending</div>
      </div>

      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in recentlyAddedMovies"
          :key="index"
          :views="movie.view"
          :name="movie.title"
          :img="movie.imgUrl"
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
      moviesCollection: state => state.adminMovies.moviesCollection,
      recentlyAddedMovies: state => state.adminMovies.recentlyAddedMovies
    })
  },
  mounted() {
    this.$store.dispatch("adminMovies/getMovies", { vueApp: this });
    this.$store.dispatch("adminMovies/getRecentlyAddedMovies", {
      vueApp: this
    });
  }
};
</script>
