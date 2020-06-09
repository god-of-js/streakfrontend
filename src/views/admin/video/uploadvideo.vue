<template>
    <div>
    <form @submit.prevent="uploadVideo">
        <input type="file" class="file" @change="videofile" required/>
        <input type="file" class="imgfile" @change="imgfile" required />
        <input type="text" v-model="title" placeholder="Title" required/>
        <input type="date" v-model="date" required />
        <input type="text" v-model="description" placeholder="Description" required/>
        <input type="text" v-model="cast" placeholder="Cast" required/>
        <input type="number" v-model="pg" placeholder="Parental Guidiance" required/>
        <button> Submit </button>
             </form>
    </div>
</template>
<script>
export default {
    name: 'Upload-Video',
    data: () => {
        return {
            title: null, 
            img: null, 
            date: null, 
            description: null, 
            pg: null,
            video: null,
            cast: null
        }
    },
    methods: {
        videofile() {
            const fileInput = document.querySelector(".file");
            const file = fileInput.files[0];
            this.video = file
        },
        imgfile() {
            const fileInput = document.querySelector(".imgfile");
            const file = fileInput.files[0];
            this.img = file
        },
        uploadVideo() {
            this.$store.state.app.state.loader = true
            let err;
            if(!this.$imgCheck(this.img)) {
                this.$errorNot('Wrong format of Image', this)
                this.$store.state.app.state.loader = false
                throw err
            }
            if(!this.$videoCheck(this.video)) {
                this.$errorNot('Wrong format of Video', this)
                this.$store.state.app.state.loader = false
                throw err
            }
            let formData =  new FormData();
            formData.append('title', this.title)
            formData.append('media', this.img)
            formData.append('date', this.date)
            formData.append('description', this.description)
            formData.append('media', this.video)
            formData.append('cast', this.cast)
            formData.append('pg', this.pg)
            this.$post('/api/v1/admin/video-upload', formData, this, () => {
                this.$store.state.app.state.loader = false
            })
        }
    }
}
</script>