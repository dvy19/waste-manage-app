import axios from "axios";
import { tokenStorage } from "@/service/tokenStorage";
const api = axios.create({
    baseURL: "https://waste-management-hiay.onrender.com/api/",
    headers: {
        "Content-Type": "application/json",
    },

});


api.interceptors.request.use(async (config) => {

    const token = await tokenStorage.getAccessToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


export default api;