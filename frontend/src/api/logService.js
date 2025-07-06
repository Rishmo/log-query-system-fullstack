import axios from 'axios';

export const fetchLogs = async (filters) => {
  const params = new URLSearchParams();
  for (const key in filters) {
    if (filters[key]) {
      params.append(key, filters[key]);
    }
  }

  const response = await axios.get(`http://localhost:5000/logs?${params.toString()}`);
  return response.data;
};
