const { default: axios } = require("axios");

const api = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export default api;
