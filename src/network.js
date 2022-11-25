import axios from "axios";

const networkProvider = axios.create({ baseURL: "https://nestapp1024.herokuapp.com" });

export { networkProvider };

