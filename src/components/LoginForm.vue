<template>
  <form class="m-loginForm">
    <Header :title="title" />

    <div class="m-loginForm__group">
      <animated-input placeholder="Customer Number" animateBorder />
    </div>

    <div class="m-loginForm__group">
      <animated-input
        placeholder="Customer Order"
        animateBorder
        inputType="password"
      />
    </div>

    <div class="m-loginForm__group -mg-lg">
      <div class="m-loginForm__rememberWrapper">
        <custom-checkbox
          name="remember_me"
          id="remember_me"
          labelText="Remember Me"
          checkbox="✔︎"
        ></custom-checkbox>

        <link-button href="#" linkText="Forgot Cust">
        </link-button>
      </div>
    </div>

  

    <submit-button>Log In</submit-button>
  </form>
</template>

<script>
import Header from "./inputs/Header.vue";
import AnimatedInput from "./inputs/AnimatedInput.vue";
import CustomCheckbox from "./inputs/CustomCheckbox.vue";
import LinkButton from "./buttons/LinkButton.vue";
import SubmitButton from "./buttons/SubmitButton.vue";

export default {
  data() {
    return {
      cnum: "000",
      cord: "000"
    };
  },
  components: {
    Header,
    AnimatedInput,
    CustomCheckbox,
    LinkButton,
    SubmitButton
  },
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/forms/_loginForm.scss";

</style>
