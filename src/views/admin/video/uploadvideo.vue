<template>
  <div class="p-3">
    <div class=" m-3">
      <div class="title">Upload Video</div>
      <div class="font_sm">Upload movies of different categories for users</div>
    </div>
    <form @submit.prevent="uploadVideo" class="admin_form col-10 mx-auto">
      <div class="d-flex">
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Movie Title</div>
          <input type="text" v-model="title" required />
        </div>
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Date of production</div>
          <input type="date" v-model="date" required />
        </div>
      </div>
      <div class="d-flex flex-column col">
        <div class="text-left pl-2  font_sm">Description of movie</div>
        <textarea
          type="text"
          v-model="description"
          required
          class="ml-2 mr-2"
        />
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
            Click to add Movie or Drag and drop Movie
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
            Click to add image or Drag and drop Image
          </div>
          <input type="file" class="imgfile hide" @change="imgfile" />
        </div>
      </div>
      <div class="d-flex">
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">
            Movie Cast (seperate by commas)
          </div>
          <input type="text" v-model="cast" required />
        </div>
        <div class="d-flex flex-column m-2 col">
          <div class="text-left pl-2  font_sm">Type</div>
          <select v-model="movieType" required>
            <option
              v-for="(cat, index) in type"
              :key="index"
              :value="cat.value"
            >
              {{ cat.name }}
            </option>
          </select>
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
      description: null,
      pg: null,
      video: null,
      cast: null,
      movieType: null,
      categorySelect: null,
      category: [],
      type: [
        { name: "Single Movie", value: "single" },
        { name: "Series", value: "series" }
      ],
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
      const fileInput = document.querySelector(".file");
      const file = fileInput.files[0];
      if (!this.$videoCheck(file)) {
        this.$errorNot("Wrong format of Video", this);
      } else {
        this.video = file;
        document.querySelector("[video-name]").textContent = file.name;
      }
    },
    imgfile() {
      const fileInput = document.querySelector(".imgfile");
      const file = fileInput.files[0];
      if (!this.$imgCheck(file)) {
        this.$errorNot("Wrong format of Image", this);
      } else {
        this.img = file;
        document.querySelector("[img-name]").textContent = file.name;
      }
    },
    clickFile(file) {
      document.querySelector(`.${file}`).click();
    },
    droppedFile(e, type) {
      const file = e.dataTransfer.files;
      if (type === "video") {
        if (!this.$videoCheck(...file)) {
          this.$errorNot("Wrong format of Video", this);
        } else {
          this.video = file;
          document.querySelector("[video-name]").textContent = file[0].name;
        }
      } else if (type === "img") {
        if (!this.$imgCheck(...file)) {
          this.$errorNot("Wrong format of Image", this);
        } else {
          this.img = file;
          document.querySelector("[img-name]").textContent = file[0].name;
        }
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
      } else {
        let formData = new FormData();
        formData.append("title", this.title);
        formData.append("media", this.img);
        formData.append("date", this.date);
        formData.append("dateAdded", Date.now());
        formData.append("description", this.description);
        formData.append("media", this.video);
        formData.append("cast", this.cast);
        formData.append("type", this.movieType);
        formData.append("category", this.category);
        formData.append("pg", this.pg);
        this.$post("/api/v1/admin/video-upload", formData, this, () => {
          this.$store.commit("app/loaderStatus", false);
        });
      }
    }
  }
};
</script>
