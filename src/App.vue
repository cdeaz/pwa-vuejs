<template>
  <div id="app">
    <div class="m-flexContainer">
      <div class="m-formContainer">
        <LoginForm :title="headerText" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "app",
  data() {
    return {
      headerText: "Authentification"
    };
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
