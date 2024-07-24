import { ApiEndpoints } from "../exports";
import axios from "../lib/axios";

export const getUserAllNotes = async (userId = "") => {
    if (!userId) {
        return [];
    }
    const { data } = await axios.get(ApiEndpoints.dummyData());
    return data;
};
