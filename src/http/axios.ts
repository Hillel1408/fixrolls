import axios from "axios";

const instance = axios.create({
    baseURL: "http://89.248.201.151",
});

export default instance;
