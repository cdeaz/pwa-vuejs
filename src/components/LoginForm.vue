<template>
  <form class="m-loginForm" @submit.prevent="login">
    <Header :title="title" />

    <div class="m-loginForm__group">
      <animated-input 
      id="cnum"
      placeholder="Customer Number" 
      animateBorder 
      v-model="cnum"/>
    </div>

    <div class="m-loginForm__group">
      <animated-input
        id="cord"
        placeholder="Customer Order"
        animateBorder
        inputType="password"
        v-model="cord"
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
    <submit-button press="onLoginTap">Log In</submit-button>
  </form>
</template>

<script>
import Header from "./inputs/Header.vue";
import AnimatedInput from "./inputs/AnimatedInput.vue";
import CustomCheckbox from "./inputs/CustomCheckbox.vue";
import LinkButton from "./buttons/LinkButton.vue";
import SubmitButton from "./buttons/SubmitButton.vue";

export default {
  name: 'login',
  data() {
    return {
      cnum: '',
      cord: '',
    }
  },
  onLoginTap: function(){
    var cnum = this.getView().byId("cnum").getValue();
    var cord = this.getView().byId("cord").getValue();

    console.log(cnum);
    console.log(cord);
      
    // Customer number and customer order identification
      const router = this.getOwnerComponent().getRouter();
    if (cnum==='0001007260' && cord==='0100010237') {
      router.navTo('SalesList', {
        cnum: cnum
      }); 
    } else {
      alert('Fail to connect wrong customer number or customer order');
    }
        
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
