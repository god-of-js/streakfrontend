import adminlayout from '../layouts/adminlayout.vue'
import videoupload from '../views/admin/video/uploadvideo.vue'

export default [{
   path: '/adminlayout',
   component: adminlayout,
   name: 'Admin Layout',
   children: [
       {
           path: '/video-upload',
           component: videoupload,
           name: 'Video Upload'
       }
   ]
}]