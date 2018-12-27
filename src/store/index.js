import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    price: 20,
    ordered: null,
  },
  getters: {
    count(state) {
      return state.count;
    },
    price(state) {
      return state.price;
    },
    total(state) {
      return state.count * state.price;
    },
  },
  mutations: {
    incrementProduct(state) {
      state.count += 1;
    },
    decrementProduct(state) {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    orderedSend(state) {
      state.ordered = 'pending';
      M.toast({html: state.ordered});
    },
    orderedDone(state) {
      state.ordered = 'done';
      M.toast({html: state.ordered});
    },
  },
  actions: {
    sendData(store) {
      store.commit('orderedSend');

      setTimeout(() => {
        store.commit('orderedDone');
      }, 1000);
    },
  },
});