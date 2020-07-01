<template>
  <div class="p-3">
    <div class=" m-3">
      <div class="title">Add Episode</div>
      <div class="font_sm">
        Add an episode to season {{ getSeason[0].season }} of
        {{ $format(serie.title) }}
      </div>
    </div>
    <form @submit.prevent="uploadVideo" class="admin_form col-10 mx-auto">
      <div class="d-flex">
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Episode Number</div>
          <input type="number" v-model="episode" required />
        </div>
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">
            Cast (seperate by commas and space)
          </div>
          <input type="text" v-model="cast" required maxlength="250" />
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div
          class="upload_box d-flex align-items-center flex-column justify-content-center col-5 m-4"
          @click="clickFile('file')"
          @dragover.prevent
          @drop.prevent="droppedFile($event, 'video')"
        >
          <i class="mdi mdi-upload"> </i>
          <div class="font_sm" video-name>
            Click to add Episode's video
          </div>
          <input type="file" class="file hide" @change="videofile" />
        </div>
        <div
          class="upload_box d-flex align-items-center flex-column justify-content-center col-5 m-4"
          @click="clickFile('imgfile')"
          @dragover.prevent
          @drop.prevent="droppedFile($event, 'img')"
        >
          <i class="mdi mdi-upload"> </i>
          <div class="font_sm" img-name>
            Click or Drag and drop to add cover Image
          </div>
          <input type="file" class="imgfile hide" @change="imgfile" />
        </div>
      </div>
      <div class="d-flex justify-content-end pr-4">
        <button class="btn">Upload Video</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Upload-Video",
  data: () => {
    return {
      episode: null,
      img: null,
      video: null,
      cast: null
    };
  },
  computed: {
    ...mapState({
      serie: state => state.movies.serie
    }),
    ...mapGetters({
      getSeason: "movies/getSeason"
    })
  },
  methods: {
    videofile() {
      let err;
      const fileInput = document.querySelector(".file");
      const file = fileInput.files[0];
      if (!this.$videoCheck(file)) {
        this.$errorNot("Wrong format of Video", this);
        throw err;
      }
      this.video = file;
      document.querySelector("[video-name]").textContent = file.name;
    },
    imgfile() {
      let err;
      const fileInput = document.querySelector(".imgfile");
      const file = fileInput.files[0];
      if (!this.$imgCheck(file)) {
        this.$errorNot("Wrong format of Image", this);
        throw err;
      }
      this.img = file;
      document.querySelector("[img-name]").textContent = file.name;
    },
    clickFile(file) {
      document.querySelector(`.${file}`).click();
    },
    droppedFile(e, type) {
      const file = e.dataTransfer.files;
      console.log(file[0]);
      if (type === "video") {
        if (!this.$videoCheck(...file)) {
          this.$errorNot("Wrong format of Video", this);
          throw e;
        }
        this.video = file;
        document.querySelector("[video-name]").textContent = file[0].name;
      } else if (type === "img") {
        if (!this.$imgCheck(...file)) {
          this.$errorNot("Wrong format of Image", this);
          throw e;
        }
        this.img = file;
        document.querySelector("[img-name]").textContent = file[0].name;
      }
    },
    uploadVideo() {
      this.$store.commit("app/loaderStatus", true);
      if (!this.video || !this.img) {
        this.$errorNot("You must provide both image and video", this);
        this.$store.commit("app/loaderStatus", false);
        let e;
        return e;
      }
      let seriesId = this.$router.history.current.params.seriesid,
        seasonId = this.$router.history.current.params.seasonid;
      let formData = new FormData();
      formData.append("episodeNumber", this.episode);
      formData.append("media", this.img);
      formData.append("media", this.video);
      formData.append("cast", this.cast);
      formData.append("seriesId", seriesId);
      formData.append("seasonId", seasonId);
      this.$post(
        "/api/v1/admin/add-episode",
        formData,
        this,
        () => {
          this.$store.commit("app/loaderStatus", false);
        },
        "episode_add",
        () => {
          this.$router.push({
            name: "episodes",
            params: {
              seriesId: this.$router.history.current.params.seriesId,
              seasonId: this.$router.history.current.params.seasonId
            }
          });
        }
      );
    }
  }
};
</script>
