import axios from "axios";
import { ApiEndpoints, Axios } from "../exports";

export const getApiHealth = async () => {
    const { data } = await axios.get(ApiEndpoints.apiHealth(), {
        timeout: 3 * 1000,
    });
    return data;
};
