<template>
    <nav class="admin_sidebar h_100 p-1">
    <div class="text-left pt-3 pl-2 border_bottom">
        <bluestreak />
     </div>
     <ul class="pt-5 pl-0 or-0">
     <li :class="$router.history.current.fullPath === path.path? inactiveClass + 'active border_radius' : inactiveClass" v-for="(path, index) in paths" :key="index">
     <i :class="'mdi  mr-3 ' + path.icon">
     </i>
     <span>
     {{path.name}}
     </span>
     </li>
     </ul>
    </nav>
</template>
<script>

export default {
    data: () => {
        return {
            paths: [
                {
                    name: 'Dashboard',
                    path: '/admin-dashboard',
                    icon: 'mdi-view-dashboard'
                },
                {
                    name: 'Uploads',
                    path: '/video-upload',
                    icon: 'mdi-upload'
                },
                {
                    name: 'Movies',
                    path: '/admin-view-movies',
                    icon: 'mdi-movie-open'
                }
            ],
            inactiveClass: 'text-left pl-3 p-2 d-flex align-items-center mt-2 '
        }
    },
    beforeMount() {
        console.log()
    },
}
</script>