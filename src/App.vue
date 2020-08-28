<template>
  <div id="app">
    
    <div id="nav">
            <router-link 
            v-if="authenticated" 
            to="/LoginForm" 
            v-on:click.native="logout()" 
            replace>Logout
            </router-link>
        </div>
        <main>
          <router-view/>
        </main>
  </div>
</template>

<script>
//import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      mockAccount: {
          cnum: 'test',
          cord: 'test'
      }
    }
  },
mounted() {},
methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
},
components: {
 //   LoginForm,
  },
};
</script>

<style lang="scss">
/* GLOBAL SCSS IMPORT */
@import './scss/main.scss';
</style>
