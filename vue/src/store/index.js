import Vue from 'vue';
import Vuex from 'vuex';
import Logger from '../log';

Vue.use(Vuex);

const log = new Logger();

const mockedArray = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([4, 8, 15, [16, 23], 42]);
    }, 1200);
  });

const store = new Vuex.Store({
  state: {
    arr: [],
    zero: log.zero,
  },
  getters: {
    arr: state => state.arr.flat(),
  },
  mutations: {
    setArray: (state, payload) => {
      state.arr = payload;
      log.run(payload.flat());
    },
  },
  actions: {
    async getArray({ commit }) {
      const data = await mockedArray();
      commit('setArray', data);
    },
  },
});

export default store;
