import Vue from 'vue';
import Vuex from 'vuex';

// Register all store-related items (state, actions, mutations, modules) from each specific pages.

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
  },
  mutations: {
    authUser(state) {
      state.isAuth = true;
    },
    clearUser(state) {
      state.isAuth = false;
    },
  },
  actions: {
    login({ commit }) {
      console.log('Actions login');
      commit('authUser');
    },
    logout({ commit }) {
      console.log('Actions logout');
      commit('clearUser');
    },
  },
  modules: {},
});
