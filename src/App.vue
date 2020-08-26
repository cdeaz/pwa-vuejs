<template>
  <div id="app">
    <div class="m-flexContainer">
      <div class="m-formContainer">
        <LoginForm :title="headerText" />
      </div>
    </div>
    <div id="nav">
            <router-link v-if="authenticated" to="/LoginForm" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "app",
  data() {
    return {
      headerText: "Authentification",
      authenticated: false,
      mockAccount: {
          cnum: "test",
          cord: "test"
      }
    }
  },
mounted() {
    if(!this.authenticated) {
        this.$router.replace({ name: "LoginForm" });
    }
},
methods: {
    setAuthenticated(status) {
        this.authenticated = status;
    },
    logout() {
        this.authenticated = false;
    }
},
components: {
    LoginForm
  }
};
</script>

<style lang="scss">
/* GLOBAL SCSS IMPORT */
@import "./scss/main.scss";
</style>
