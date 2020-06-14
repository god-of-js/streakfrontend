<template>
  <div class="m-3 movie">
    <div class="img_cont" :style="{ backgroundImage: `url(${img})` }"></div>

    <div class="movie_name text-left pt-2 pl-1">{{ $format(name) }}</div>
    <div class="d-flex justify-content-between">
      <div>
        <i
          class="mdi mdi-star"
          v-for="index in 5"
          :key="index"
          :style="index <= rating ? 'color: yellow' : ''"
        >
        </i>
      </div>
      <button
        class="d-flex align-items-center white_text views btn view_btn pt-0 pb-0 pl-2 pr-2"
      >
        <i class="mdi mdi-eye"> </i>
        <span class=" ml-2">{{ views }}</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    img: String,
    rating: Number,
    views: [String, Number]
  }
};
</script>
