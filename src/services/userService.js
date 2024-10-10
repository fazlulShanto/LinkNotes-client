import { ApiEndpoints, Axios } from "../exports";
import { LOCAL_STORAGE_TOKEN } from "../utils/Contents";

export const updateUserProfileImage = async (url) => {
    try {
        const { data } = await Axios.put(
            ApiEndpoints.updateAvatarUrl(),
            {
                avatarUrl: url,
            },
            {
                headers: {
                    token: localStorage.getItem(LOCAL_STORAGE_TOKEN),
                },
            }
        );
        const userInfo = data?.dataSource?.userInfo;
        return userInfo;
    } catch (error) {
        console.log("error while updating avatar.");
    }
};
