import axios from "axios";
// export const baseUrl = `http://192.168.0.109:4567`;
const env = import.meta.env.MODE;

export const remoteBaseUrl = `http://135.181.141.62:4004`;

export const remoteRenderUrl = `https://linknotes-server.onrender.com`;

export const baseUrl =
    env === "production" ? remoteRenderUrl : `http://localhost:4567`;

const Axios = axios.create({
    baseURL: baseUrl,
    timeout: 20 * 1000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
export default Axios;
