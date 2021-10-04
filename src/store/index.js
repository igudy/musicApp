import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) =>{
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state){
      state.userLoggedIn = !state.authModalShow;
    },

  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  }

});
