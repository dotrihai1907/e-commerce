import axios from "axios";

export default axios.create({
  baseURL: "http://139.59.103.50:5000",
  headers: {
    "Content-Type": "application/json",
  },
});
