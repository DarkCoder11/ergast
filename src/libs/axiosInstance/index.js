import axios from 'axios';

import {ERGAST_API_BASE} from '../../constants';

const requestDefaultConfig = {
  baseURL: ERGAST_API_BASE,
};

const axiosInstance = axios.create(requestDefaultConfig);

export default axiosInstance;
