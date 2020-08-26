import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  cnum: "00",
  cord: "00",
  token: null
};

const mutations = {
  set_user(state, number) {
    state.user = number;
  },
  set_token(state, token) {
    state.token = token;
  },
  get_token(state) {
    return state.token;
  },
  login(state, cnum, cord) {
    axios.get( cnum + cord).then((response) => {
      if (Object.keys(response.data.results).length === 0) {
        state.cnum = ''
        state.token = ''
        console.log('Connect False')
        return false
      } else {
        state.username = response.data.results.login.cnum
        state.token = response.data.results.login.token
        console.log('Connect : ' + state.token)
        return response.data.results.login.token
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})