import { ApiEndpoints, Axios } from "../exports";

export const updateUserProfileImage = async (url) => {
    try {
        const { data } = await Axios.put(ApiEndpoints.updateAvatarUrl(), {
            avatarUrl: url,
        });
        const userInfo = data?.dataSource?.userInfo;
        return userInfo;
    } catch (error) {
        console.log("error while updating avatar.");
    }
};
