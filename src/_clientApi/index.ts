import axios from "axios";
import { onAppBoot } from "../_redux/actions/auth";


const clientApi = axios.create({
    baseURL: `${process.env.REACT_APP_LOCAL_HOST}`,
})
const Interceptor = (store) => {
clientApi.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && originalRequest._retry !== true) {
        originalRequest._retry = true
        localStorage.clear();
        store.dispatch(onAppBoot())
    }
    return Promise.reject(error);
})
}
export { clientApi, Interceptor }