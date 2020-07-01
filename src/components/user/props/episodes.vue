<template>
  <div class="m-3 movie" @mouseover="viewMovie(id)" @mouseout="stopVideo(id)">
    <div
      @click="viewEpisodes"
      class="img_cont"
      :id="id + '_image'"
      :style="{ backgroundImage: `url(${img})` }"
    >
      <img src="/img/play.svg" width="50" class="action_icon" />
    </div>
    <div class="video_cont" :id="id + '_video'" @click="func(movie)">
      <video width="200" height="200" autoplay loop muted>
        <source :src="`${video}`" loop />
      </video>
    </div>
    <div class="movie_name text-left pt-2 pl-1">{{ $format(name) }}</div>
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <div>
          <img src="/img/like.svg" width="10" />
          <span class="percent_rated ml-2">50% </span>
        </div>
        <div
          class="d-flex align-items-center white_text views pt-0 pb-0 pl-2 pr-2"
        >
          <i class="mdi mdi-eye"> </i>
          <span class=" ml-2">{{ views }} </span>
        </div>
      </div>
      <div><button class="trans_btn mdi mdi-dots-vertical"></button></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    img: String,
    id: String,
    rating: Number,
    video: String,
    views: [String, Number],
    movie: Object
  },
  methods: {
    viewMovie(id) {
      let img_background = document.getElementById(id + "_image");
      let video_background = document.getElementById(id + "_video");
      setTimeout(() => {
        img_background.style.display = "none";
        video_background.style.display = "block";
      }, 1500);
    },
    stopVideo(id) {
      let img_background = document.getElementById(id + "_image");
      let video_background = document.getElementById(id + "_video");
      setTimeout(() => {
        img_background.style.display = "flex";
        video_background.style.display = "none";
      }, 1500);
    },
    viewEpisodes(movie) {
      movie.episodeNumber;
      let seriesId = this.$router.history.current.params.seriesid;
      let seasonId = this.$router.history.current.params.seasonid;
      this.$router.push({
        name: "user-view-episode",
        params: {
          seriesid: seriesId,
          seasonid: seasonId,
          episodeid: this.movie.episodeNumber
        }
      });
    }
  }
};
</script>
