<template>
  <div class="p-3">
    <div class=" m-3">
      <div class="title">Create Series</div>
      <div class="font_sm">Create series of different categories for users</div>
    </div>
    <form @submit.prevent="uploadVideo" class="admin_form col-10 mx-auto">
      <div class="d-flex">
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Series Title</div>
          <input type="text" v-model="title" required />
        </div>
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">
            Cast (seperate by commas)
          </div>
          <input type="text" v-model="cast" required maxlength="250" />
        </div>
      </div>
      <div class="d-flex flex-column col">
        <div class="text-left pl-2  font_sm">Description of series</div>
        <textarea
          type="text"
          v-model="description"
          required
          maxlength="600"
          class="ml-2 mr-2"
        />
        <small v-if='description.length >= 600' class="small">Maximum number of characters(1500) surpassed </small>
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
      <div class="d-flex">
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Category</div>
          <select v-model="categorySelect" @change="addCategory" required>
            <option
              v-for="(cat, index) in moviecat"
              :key="index"
              @change="addCategory(cat.name)"
            >
              {{ cat.name }}
            </option>
          </select>
          <small v-if="category.length !== 0" class="font_sm text-left">
            <span v-for="(cat, index) in category" :key="index">
              {{ cat }},
            </span></small
          >
        </div>
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Parental Guidiance</div>
          <input type="number" v-model="pg" required />
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
      title: null,
      img: null,
      date: null,
      description: '',
      pg: null,
      video: null,
      cast: null,
      movieType: null,
      categorySelect: null,
      category: [],
      moviecat: [
        { name: "Horror" },
        { name: "Sci-Fi" },
        { name: "Comedy" },
        { name: "Sports" },
        { name: "Western" },
        { name: "War" },
        { name: "Crime" },
        { name: "Melodramas" },
        { name: "Romance" },
        { name: "Epic" },
        { name: 'Biographical Films (or "Biopics") - or Historical' },
        { name: "Documentary" },
        { name: "Film noir" },
        { name: "New wave films" },
        { name: "Epic films" },
        { name: "War films" },
        { name: "Gangster films" },
        { name: "Detective and mystery films" },
        { name: "Spy films" },
        { name: "Disaster films" },
        { name: "Caper films" },
        { name: "Foreign films" },
        { name: "Romantic comedy " },
        { name: "Adventure" },
        { name: "Action and adventure films" },
        { name: "Fantasy films" },
        { name: "Musical films" },
        { name: "Religious" },
        { name: "Police films" },
        { name: "Puppet films" },
        { name: "Film adaptations" },
        { name: "Blaxploitation films" },
        { name: "Thrillers" },
        { name: "Frankenstein films" },
        { name: "Star Wars films" }
      ]
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
    addCategory() {
      this.category.push(this.categorySelect);
    },
    uploadVideo() {
      this.$store.commit("app/loaderStatus", true);
      if (!this.video || !this.img) {
        this.$errorNot("You must provide both image and video", this);
        this.$store.commit("app/loaderStatus", false);
      }
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("media", this.img);
      formData.append("date", this.date);
      formData.append("description", this.description);
      formData.append("media", this.video);
      formData.append("cast", this.cast);
      formData.append("category", this.category);
      formData.append("pg", this.pg);
      this.$post(
        "/api/v1/admin/series-upload",
        formData,
        this,
        () => {
          this.$store.commit("app/loaderStatus", false);
        },
        "series_add"
      );
    }
  }
};
</script>
