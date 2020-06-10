<template>
    <div class="d-flex h_100" >
    <sidebar class="col-2"/>
    <div class="col-10 admin_body h_100 p-0 overflow"> 
    <navbar />
    <div class="route_body overflow">
        <router-view></router-view>
     </div>
    </div>
    </div>
</template>
<script>
import sidebar from '../components/admin/adminsidebar.vue'
import navbar from '../components/admin/adminnavbar.vue'
export default {
    components: {
        sidebar,
        navbar
    }
    
}
</script>
<style lang="scss">
 @import "../style/admin.scss";
 @import "../style/adminresponsive.scss";
</style>