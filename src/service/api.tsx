import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/JuniCard/",
});

export default api;