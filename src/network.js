import axios from "axios";

const networkProvider = axios.create({
  baseURL: "https://bdg.onrender.com",
});

export { networkProvider };
