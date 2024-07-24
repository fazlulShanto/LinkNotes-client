import axios from "axios";
// export const baseUrl = `http://192.168.0.109:4567`;
export const baseUrl = `http://localhost:4567`;
// export const baseUrl = `http://135.181.141.62:4004`;

export default axios.create({
    baseURL: baseUrl,
    timeout: 20 * 1000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
