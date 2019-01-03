import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    price: 20,
    ordered: null,
    info: [],
    formProccess: false,
    formSubmited: false,
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
    info(state) {
      return state.info;
    },
    filledField(state) {
      let done = 0;
      for (let i = 0; i < state.info.length; i += 1) {
        if (state.info[i].status) done += 1;
      }
      return done;
    },
    formProccess(state) {
      return state.formProccess;
    },
    formSubmited(state) {
      return state.formSubmited;
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
      M.toast({ html: state.ordered });
    },
    orderedDone(state) {
      state.ordered = 'done';
      M.toast({ html: state.ordered });
    },
    setInfoValue(state, payload) {
      state.info[payload.index].value = payload.value;
    },
    setInfoStatus(state, payload) {
      state.info[payload.index].status = payload.isValid;
    },
    formProccess(state) {
      state.formProccess = true;
    },
    formSubmited(state) {
      state.formSubmited = !state.formSubmited;
    },
  },
  actions: {
    sendData(store) {
      store.commit('orderedSend');

      setTimeout(() => {
        store.commit('orderedDone');
      }, 1000);
    },
    formSubmit(store) {
      store.commit('formProccess');

      setTimeout(() => {
        store.commit('formSubmited');
      }, 3000);
    },
  },
});
