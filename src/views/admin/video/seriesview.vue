<template>
    <div class="p-3">
    <div class="row">
    <adminmovie
          :views="50"
          :name="'Title'"
          :img="'/img/mockingjay.jpeg'"
          :rating="7"
        />
        <addseries :func="addSeries"/>
     </div>
    </div>
</template>
<script>
export default {
    methods: {
        addSeries() {
            let url = window.location.href;
            url = url.substr(40);
            this.$router.push(`/add-season_serie-id=${url}`)
        }
    }
}
</script>