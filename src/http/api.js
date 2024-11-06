import axios from "axios";

const SERVER_URL = "https://api.github.com";

const apiRequest = async (endpoint, method = "GET", data = {}, config = {}) => {
  try {
    const response = await axios({
      url: `${SERVER_URL}${endpoint}`,
      method,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

const api = {
  get: (endpoint, config = {}) => apiRequest(endpoint, "GET", {}, config),
  post: (endpoint, data = {}, config = {}) =>
    apiRequest(endpoint, "POST", data, config),
};

export default api;
