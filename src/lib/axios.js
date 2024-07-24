import axios from "axios";
// export const baseUrl = `http://192.168.0.109:4567`;
const env = import.meta.env.MODE;
export const remoteBaseUrl = `http://135.181.141.62:4004`;
export const baseUrl =
    env === "production" ? remoteBaseUrl : `http://localhost:4567`;

export default axios.create({
    baseURL: baseUrl,
    timeout: 20 * 1000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
