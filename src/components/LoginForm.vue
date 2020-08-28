<template>
  <form class="m-loginForm">
        <div class="m-loginForm__group">
          <Header :title="title"/>
          <animated-input 
          placeholder="Customer Number" 
          animateBorder 
          v-model="input.cnum"
          />
        </div>
        <div class="m-loginForm__group">
          <animated-input 
          placeholder="Customer Order" 
          animateBorder 
          inputType="password" 
          v-model="input.cord"
          />
        </div>
        <div class="m-loginForm__group">
          <router-link v-on:click="onloginTap()" to="/saleslist">
            <submit-button >Log In</submit-button>
          </router-link> 
        </div>
  </form>
</template>

<script>
import Header from './inputs/Header.vue';
import AnimatedInput from "./inputs/AnimatedInput.vue";
import SubmitButton from "./buttons/SubmitButton.vue";

export default {
  name: 'LoginForm',
  data() {
    return {
      headerText: 'Authentification',
      login: { cnum: '', cord: ''},
      input: {
        cnum: '',
        cord: '',
      },
    };
  },
  methods: {
    onLoginTap(){ 
        if (this.input.cnum != '' && this.input.cord != '') {
        if (
          this.login.input == this.$parent.mockAccount.cnum &&
          this.input.cord == this.$parent.mockAccount.cord
        ) {
          this.$emit('authenticated', true);
          this.$router.push({ path: '/saleslist' });
        } else {
          console.log('The customer order or number is incorrect');
        }
      } else {
        console.log('A customer order or number must be present');
      }
    },

  },
  components: {
    Header,
    AnimatedInput,
    SubmitButton,
  },
  props: {
    title: String,
  }
};
</script>

<style lang="scss" scoped>
 @import "@/scss/components/forms/_loginForm.scss";

 .m-loginForm {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 173px 750px 50px;
}

.a-header[data-v-0d148833] {
    padding: 35px;
}
</style>
