<template>
  <div class="">
    <form
      class="auth_form d-flex flex-column pt-4 pb-5"
      @submit.prevent="register"
    >
      <div class="d-flex flex-column">
        <div class="text-left pl-2 font_sm">Name</div>
        <input type="text" class="m-2 p-2 " required v-model="data.name" />
      </div>
      <div class="d-flex flex-column">
        <div class="text-left pl-2  font_sm">Email</div>
        <input type="email" class="m-2 p-2 " required v-model="data.email" />
      </div>
      <div class="d-flex flex-column">
        <div class="text-left pl-2  font_sm">Phone Number</div>
        <input type="number" class="m-2 p-2 " required v-model="data.phone" />
      </div>
      <div class="d-flex flex-column">
        <div class="text-left pl-2  font_sm">Password</div>
        <input
          type="password"
          class="m-2 p-2 "
          required
          v-model="data.password"
          oninvalid="this.setCustomValidity('Min. 8 characters with at least one capital letter, a number and a special character.')"
          oninput="this.setCustomValidity('')"
          min="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.*[A-Z]).{8,}"
        />
      </div>
      <div class="d-flex flex-column">
        <div class="text-left pl-2  font_sm">Confirm Password</div>
        <input
          type="password"
          class=" m-2 p-2"
          required
          v-model="cpassword"
          oninvalid="this.setCustomValidity('Min. 8 characters with at least one capital letter, a number and a special character.')"
          oninput="this.setCustomValidity('')"
          min="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.*[A-Z]).{8,}"
        />
      </div>
      <button
        class="btn blue_btn m-2 mt-4 d-flex justify-content-center align-items-center "
      >
        Sign Up
      </button>
    </form>
    <div class="font_sm">
      Part of BlueStreak? <router-link to="/login">Sign In </router-link>
    </div>
  </div>
</template>
<script>
import auth from "../../auth";
export default {
  data: () => {
    return {
      cpassword: "",
      data: {
        name: "",
        email: "",
        phone: null,
        password: "",
        accountType: "user"
      }
    };
  },
  methods: {
    register() {
      this.$store.state.app.loader = true;
      if (this.cpassword !== this.data.password) {
        this.$store.state.app.loader = false;
        this.$errorNot("Try matching your password", this);
        let err;
        throw err;
      }
      auth.reg(this.data, this);
    }
  }
};
</script>
