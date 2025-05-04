/**
 * axios setup to use mock service
 */

import axios from 'axios';

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

const axiosServices = axios.create();

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !window.location.href.includes('/login')) {
      window.location = '/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export default axiosServices;
