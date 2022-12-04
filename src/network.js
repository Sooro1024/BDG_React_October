import axios from "axios";

const networkProvider = axios.create({
  baseURL: "https://fa3d-78-109-64-9.ngrok.io",
});

export { networkProvider };
