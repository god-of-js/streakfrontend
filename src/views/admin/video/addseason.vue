<template>
  <div class="p-3">
    <div class=" m-3">
      <div class="title">Add Season</div>
      <div class="font_sm">Add season to Movie</div>
    </div>
    <form @submit.prevent="uploadVideo" class="admin_form col-10 mx-auto">
      <div class="d-flex">
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Season Number</div>
          <input type="number" v-model="season" required />
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
            Click to add short video or Drag and drop short video
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
export default {
  name: "Upload-Video",
  data: () => {
    return {
      season: null,
      img: null,
      video: null,
      cast: null
    };
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
      } else {

      let id = this.$router.history.current.params.id;
      let formData = new FormData();
      formData.append("season", this.season);
      formData.append("media", this.img);
      formData.append("media", this.video);
      formData.append("cast", this.cast);
      formData.append("movieId", id);
      console.log('ahhh')
      this.$post(
        "/api/v1/admin/season-add",
        formData,
        this,
        () => {
          this.$store.commit("app/loaderStatus", false);
        },
        "series_add"
      );
      }
    }
  }
};
</script>
