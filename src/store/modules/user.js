import api from '@/api/main';

export default {
  state: {
    user: {},
    userIsLoggedIn: false,
    services: [],
    schedules: [],
  },

  getters: {
    getUser(state) {
      return state.user;
    },
    getAllServices(state) {
      return state.services;
    },
    getSchedules(state) {
      return state.schedules;
    },
    getUserIsLoggedIn(state) {
      return state.userIsLoggedIn;
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setServices(state, service) {
      state.services.push(service);
    },
    setSchedules(state, schedules) {
      state.schedules = schedules;
    },
    setUserIsLoggedIn(state, userIsLoggedIn) {
      state.userIsLoggedIn = userIsLoggedIn;
    }
  },

  actions: {
    async createUser({ commit }, user) {
      const response = await api.createUser(user);

      commit('setUser', response.data);
    },
    async loginUser({ commit }, user) {
      try {
        const response = await api.loginUser(user);

        if(response.data.is_error === false) {
          commit('setUser', response.data);
          commit('setUserIsLoggedIn', true);

          return true;
        }
      }catch(error){
        console.log(error);
      }
    },
    logoutUser({ commit }) {
      commit('setUser', {});
      commit('setuserIsLoggedIn', false);
    },
    async createService({ commit }, service) {
      const response = await api.createService(service);

      commit('setServices', response.data);
    },
    async createSchedule({ commit }, schedule) {
      const response = await api.createSchedule(schedule);

      commit('setSchedules', response.data);
    },
    async getService({ commit }) {
      const response = await api.getServices();

      commit('setServices', response.data);
    }
  }
};