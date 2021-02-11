import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-40661.cloudfunctions.net/api", // API (Cloud function)URL
  // "http://localhost:5001/clone-40661/us-central1/api",
});

export default instance;
