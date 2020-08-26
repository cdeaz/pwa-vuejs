<template>
  <form class="m-loginForm" @submit.prevent="login">
    <Header :title="title" />

    <div class="m-loginForm__group">
      <animated-input name="cnum" placeholder="Customer Number" animateBorder v-model="input.cnum"/>
    </div>
    <div class="m-loginForm__group">
      <animated-input name="cord" placeholder="Customer Order" animateBorder inputType="password" v-model="input.cord"/>
    </div>

    

    <submit-button v-on:click="loginTap()">Log In</submit-button> 

  </form>
</template>

<script>
import Header from "./inputs/Header.vue";
import AnimatedInput from "./inputs/AnimatedInput.vue";
import SubmitButton from "./buttons/SubmitButton.vue";

export default {
  name: 'LoginForm',
  data() {
    return {
      input: {
      cnum: "",
      cord: ""
    }
    }
  },
  methods: {
    loginTap(){ 
       if(this.input.cnum != "" && this.input.cord != "") {
              if(this.input.cnum == this.$parent.mockAccount.cnum && this.input.cord == this.$parent.mockAccount.cord) {
                this.$emit("authenticated", true);
                this.$router.replace({ name: "secure" });
            } else {
                console.log("The customer order or number is incorrect");
            }
            } else {
                console.log("A customer order or number must be present");
            }
          
    }
  },
  components: {
    Header,
    AnimatedInput,
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
