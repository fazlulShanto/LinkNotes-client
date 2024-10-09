import { ApiEndpoints, Axios } from "../exports";
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
    } = await Axios.get(ApiEndpoints.me());

    return userData;
};
