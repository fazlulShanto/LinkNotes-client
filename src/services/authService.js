import { ApiEndpoints, Axios } from "../exports";
import { LOCAL_STORAGE_TOKEN } from "../utils/Contents";
export const signInService = async ({ email, password }) => {
    const response = await Axios.post(ApiEndpoints.singIn(), {
        email,
        password,
    });
    return response;
};

export const signUpService = async ({
    firstName,
    lastName,
    email,
    password,
}) => {
    const info = { firstName, lastName, email, password };
    const response = await Axios.post(ApiEndpoints.singUp(), info);
    return response;
};
export const signOutService = async () => {
    const response = await Axios.get(ApiEndpoints.signOut());
    localStorage.clear();
    return response.status === 200;
};

export const verifyUser = async () => {
    const {
        data: {
            dataSource: { userData },
        },
    } = await Axios.get(ApiEndpoints.me(), {
        headers: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN) },
    });

    return userData;
};
