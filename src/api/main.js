import axios from 'axios';

const api = axios.create({
  baseURL: 'https://protected-atoll-03299.herokuapp.com/api',
});

export default {
  createUser(user) {
    return api.post('/user', user);
  },
  loginUser(user) {
    return api.post('/user/login', user);
  },
  createService(service) {
    return api.post('/service', service);
  },
  createSchedule(schedule) {
    return api.post('/schedule', schedule);
  },
  getServices() {
    return api.get('/service');
  },
  getSchedules(){
    return api.post('/schedule/index');
  }
};
