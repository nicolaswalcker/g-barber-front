import api from '@/api/main';

export default {
  state: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    userIsLoggedIn: false,
    services: [],
    service: {},
    schedules: [],
    schedule: {},
  },

  getters: {
    getUser(state) {
      return state.user;
    },
    getAllServices(state) {
      return state.services;
    },
    getAllSchedules(state) {
      return state.schedules;
    },
    getUserIsLoggedIn(state) {
      return state.userIsLoggedIn;
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setServices(state, services) {
      state.services = services;
    },
    setService(state, service) {
      state.service = service;
    },
    setSchedule(state, schedule) {
      state.schedule = schedule;
    },
    setSchedules(state, schedules) {
      state.schedules = schedules;
    },
    setUserIsLoggedIn(state) {
      localStorage.setItem('userIsLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(state.user));
      state.userIsLoggedIn = true;
    },
    setUserIsNotLoggedIn(state) {
      localStorage.setItem('userIsLoggedIn', false);
      state.userIsLoggedIn = false;
    },
    initializeStore(state) {
      if (localStorage.getItem('userIsLoggedIn') === 'true') {
        state.userIsLoggedIn = true;
      }
    },
  },

  actions: {
    async createUser({ commit }, user) {
      const response = await api.createUser(user);

      commit('setUser', response.data);
    },
    async loginUser({ commit }, user) {
      try {
        const response = await api.loginUser(user);

        if (response.data.is_error === false) {
          commit('setUser', response.data);
          commit('setUserIsLoggedIn');

          return true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    logoutUser({ commit }) {
      commit('setUserIsNotLoggedIn');
    },
    async createService({ commit }, service) {
      try {
        const response = await api.createService(service);

        commit('setService', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async createSchedule({ commit }, schedule) {
      try {
        const response = await api.createSchedule(schedule);

        commit('setSchedule', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getSchedules({ commit }) {
      try {
        const response = await api.getSchedules();

        commit('setSchedules', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getService({ commit }) {
      const response = await api.getServices();

      commit('setServices', response.data.data);
    },
  },
};
