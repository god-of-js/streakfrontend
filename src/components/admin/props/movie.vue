<template>
  <div class="m-3 movie">
    <div
      class="img_cont"
      @click="typeCheck"
      :id="id + '_image'"
      :style="{ backgroundImage: `url(${img})` }"
    >
      <img src="/img/play.svg" width="50" class="action_icon" />
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
    movie: Object,
    func: Function,
    type: String
  },
  methods: {
    typeCheck() {
      if (this.type === "movie") this.viewMovie();
      if (this.type === "series") this.viewSerie();
      if (this.type === 'episodes') this.viewEpisodes();
    },
    viewSerie() {
      this.$router.push({ name: "series-view", params: { id: this.id } });
    },
    viewEpisodes() {
    let seriesId = this.$router.history.current.params.id;
      this.$router.push({ name: "episodes", params: { seriesid: seriesId, seasonid: this.id } });
    }
  }
};
</script>
