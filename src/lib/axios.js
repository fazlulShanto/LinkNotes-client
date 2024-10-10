import axios from "axios";
// export const baseUrl = `http://192.168.0.109:4567`;
const env = import.meta.env.MODE;
const serverHostEnv = import.meta.env.VITE_SERVER_HOST;

export const remoteBlufoxHostUrl = `http://88.198.37.107:4019`;

export const remoteRenderUrl = `https://linknotes-server.onrender.com`;

const localUrl = `http://localhost:4567`;

const getBaseUrl = () => {
    if (serverHostEnv === "bluefox") {
        return remoteBlufoxHostUrl;
    }
    if (env === "production") {
        return remoteRenderUrl;
    }
    return localUrl;
};

export const baseUrl = getBaseUrl();
// env === "production" ? remoteRenderUrl : `http://localhost:4567`;

const Axios = axios.create({
    baseURL: baseUrl,
    timeout: 20 * 1000,
    // withCredentials: true,
    // headers: {
    //     "Content-Type": "application/json",
    //     token: localStorage.getItem("token"),
    // },
});
export default Axios;
