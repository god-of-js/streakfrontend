<template>
    <div>
     <div>
        <div class="text-left pl-3 pt-3 sub_heading">Top Rated Movies</div>
        <div class="d-flex overflow p-2">
             <adminmovie v-for="(movie, index) in movies" :key="index" :views="movie.view" :name="movie.name" :img="movie.img" :rating="movie.rating"/>
        </div>
     </div>
     <div>
        <div class="text-left pl-3 pt-3 sub_heading">Most Watched Movies</div>
        <div class="d-flex overflow p-2">
             <adminmovie v-for="(movie, index) in movies" :key="index" :views="movie.view" :name="movie.name" :img="movie.img" :rating="movie.rating"/>
        </div>
     </div>
     <div>
        <div class="text-left pl-3 pt-3 sub_heading">Least Watched  Movies</div>
        <div class="d-flex overflow p-2">
             <adminmovie v-for="(movie, index) in movies" :key="index" :views="movie.view" :name="movie.name" :img="movie.img" :rating="movie.rating"/>
        </div>
     </div>
     <div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="text-left pl-3 pt-3 sub_heading">Recently Added Movies</div> 
        <router-link to="/video-upload" class="no_link_style">
            <button class="btn white_btn pt-0 pb-0 pl-2 pr-2 mr-2  mt-3"> <i class="mdi mdi-plus"> </i> Add New Movie</button> 
        </router-link>
      </div>
        
        <div class="d-flex overflow p-2">
             <adminmovie v-for="(movie, index) in movies" :key="index" :views="movie.view" :name="movie.name" :img="movie.img" :rating="movie.rating"/>
        </div>
     </div>
    </div>
</template>
<script>
export default {
      data: () => {
        return {
            movies: [
                {
                    name: 'fantastic four',
                    img: '/img/fantastic4.jpg',
                    rating: 5,
                    view: 700
                },
                {
                    name: 'indecent exposure',
                    img: '/img/indecentexposure.jpg',
                    rating: 4,
                    view: 240
                },
                {
                    name: 'jumanji',
                    img: '/img/jumanji.jpg',
                    rating: 3,
                    view: 900
                },
                {
                    name: 'mocking jay',
                    img: '/img/mockingjay.jpeg',
                    rating: 5,
                    view: 0
                },
                {
                    name: 'monster hunter',
                    img: '/img/monsterhunter-1.jpg',
                    rating: 0,
                    view: 400
                },
                {
                    name: 'spiderman',
                    img: '/img/spiderman.jpg',
                    rating: 5,
                    view: 500
                },
                {
                    name: 'tombraider',
                    img: '/img/tombraider.jpg',
                    rating: 5,
                    view: '1.5k'
                },
                {
                    name: 'what happens',
                    img: '/img/whathappensjpg.jpg',
                    rating: 5,
                    view: '40k'
                }
            ]
        }
    }
}
</script>