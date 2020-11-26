import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-6bf26.cloudfunctions.net/api",
});

// "https://us-central1-fir-6bf26.cloudfunctions.net/api"
// "http://localhost:5001/fir-6bf26/us-central1/api",

export default instance;
