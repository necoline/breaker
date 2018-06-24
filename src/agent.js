import axios from "axios";

const BASE_URL = "https://api.breaker.audio";
const NEW_BASE_URL = "http://0.0.0.0:8000";

const agent = axios.create({
  baseURL: NEW_BASE_URL
});

export default agent;
