<template>
  <div>
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-left pl-3 pt-3 sub_heading">
          Recently Added <small class="ml-2">- series </small>
        </div>
      </div>
      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in recentlyAddedSeries"
          :key="index"
          :views="movie.view"
          :name="movie.title"
          :movie="movie"
          :id="movie._id"
          :img="movie.imgUrl"
          :video="movie.videoUrl"
          :rating="movie.rating"
          :type="'series'"
          :func="viewSerie"
        />
      </div>
    </div>
    <div>
      <div class="text-left pl-3 pt-3 sub_heading">
        Top Rated <small class="ml-2">- series </small>
      </div>
      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in seriesCollection"
          :key="index"
          :views="movie.view"
          :name="movie.title"
          :video="movie.videoUrl"
          :img="movie.imgUrl"
          :rating="movie.rating"
        />
      </div>
    </div>
    <div>
      <div class="text-left pl-3 pt-3 sub_heading">
        Trending Now <small class="ml-2">- series </small>
      </div>
      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in movies"
          :key="index"
          :views="movie.view"
          :name="movie.name"
          :img="movie.img"
          :rating="movie.rating"
          :func="viewSerie"
        />
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-left pl-3 pt-3 sub_heading">
          most Rated <small class="ml-2">- series </small>
        </div>
      </div>
      <div class="d-flex overflow p-2">
        <usermovie
          v-for="(movie, index) in recentlyAddedSeries"
          :key="index"
          :views="movie.view"
          :name="movie.title"
          :img="movie.imgUrl"
          :video="movie.videoUrl"
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
      seriesCollection: state => state.movies.seriesCollection,
      recentlyAddedSeries: state => state.movies.recentlyAddedSeries
    })
  },
  mounted() {
    this.$store.dispatch("movies/getSeries", { vueApp: this });
    this.$store.dispatch("movies/getRecentlyAddedSeries", {
      vueApp: this
    });
  },
  methods: {
    viewSerie(movie) {
      this.$router.push({
        name: "user-view-series",
        params: { id: movie._id }
      });
    }
  }
};
</script>
