import axios from "axios";

const instance = axios.create({
    baseURL: "https://fiksroll.ru",
});

export default instance;
