<template>
  <div class="">
  <div class="movie_cover d-flex  align-items-center p-3 " :style="`background-image: url(${bigImgUrl})`"> 
    <img :src="bigImgUrl"  class="ml-3">
    <div class="movie_preview_text ml-4 text-left"> 
    <div class="large_title mb-2"> {{$format(title)}} </div>
    <div class="cast text-left mb-2"> {{$format(cast)}} </div>
    <div class="desc mt-2"> {{description}}</div>
    </div>
  </div>
  <div class="md_text text-left ml-3 mb-0 pb-0">{{classification}}</div>
    <div class="row ml-3 mr-3 ">
      <adminmovie
        v-for="(single, index) in collection"
        :key="index"
        :views="50"
        :name="`Season ${season.season}`"
        :img="season.img_url"
        :rating="7"
        :movie="season"
        :id="season._id"
        :type="type"
      />
      <addseries :func="addfunc" />
    </div>
  </div>
</template>
<script>
export default {
    props: {
        bigImgUrl: String,
        title: String,
        cast: String,
        description: String,
        collection: Array,
        type: String,
        addfunc: Function,
        classification: String
    }
}
</script>