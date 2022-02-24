import axios from "axios";

const api = axios.create({
  baseURL: "https://cartao-api-shis.herokuapp.com",
});

export { api };
