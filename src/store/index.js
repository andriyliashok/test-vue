import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    price: 20,
    ordered: null,
    info: [
      {
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z]{2,30}$/,
        status: false,
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/,
        status: false,
      },
      {
        name: 'Email',
        value: '',
        pattern: /.+/,
        status: false,
      },
      {
        name: 'Some Field',
        value: '',
        pattern: /.+/,
        status: false,
      },
    ],
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
    filledField() {
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
      state.info[payload.index].status = payload.status;
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
