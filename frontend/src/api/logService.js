import axios from 'axios';

const BASE_URL = 'https://log-query-system-fullstack.onrender.com'; 

export const fetchLogs = async (filters) => {
  const params = new URLSearchParams();
  for (const key in filters) {
    if (filters[key]) {
      params.append(key, filters[key]);
    }
  }

  const response = await axios.get(`${BASE_URL}/logs?${params.toString()}`);
  return response.data;
};
