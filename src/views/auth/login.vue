<template>
    <div class="">
        <form class="auth_form d-flex flex-column pt-4 pb-5" @submit.prevent="login">
        <div class="d-flex flex-column"> 
        <div class="text-left pl-2  font_sm">Email </div>
            <input type="email" class="m-2 p-2 " v-model="data.email"/>
        </div>
        <div class="d-flex flex-column"> 
        <div class="text-left pl-2  font_sm">Password </div>
    <input type="password" class=" m-2 p-2" required
            oninvalid="this.setCustomValidity('Min. 8 characters with at least one capital letter, a number and a special character.')"
            oninput="this.setCustomValidity('')"
            min="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.*[A-Z]).{8,}"
            v-model="data.password"
            />
        </div>
    <button class="btn blue_btn m-2 mt-4 d-flex justify-content-center align-items-center ">Sign In </button>
     </form>
     <div class="font_sm">Not on BlueStreak? <router-link to="/register">Sign Up</router-link> </div>
    </div>
</template>
<script>
import auth from '../../auth'
export default {
    data: () => {
        return  {
            data: {
                email: '',
                password: '',
             }
        }
    },
    methods: {
        login() {
            this.$store.state.app.state.loader = true;
        auth.login(this.data, this)
        }
    }
}
</script>