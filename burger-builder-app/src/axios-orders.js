import axios from "axios";

const Instance = axios.create({
  baseURL: "https://react-my-burger-480e6.firebaseio.com/",
});

export default Instance;
