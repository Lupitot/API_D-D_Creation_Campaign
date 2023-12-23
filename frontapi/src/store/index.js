import { createStore } from 'vuex';

export default createStore({
  state: {
    currentCampId: null,
  },
  mutations: {
    setCurrentCampId(state, campId) {
      state.currentCampId = campId;
    },
  },
});