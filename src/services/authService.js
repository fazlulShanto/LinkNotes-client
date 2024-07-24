import { ApiEndpoints } from "../exports";
import axios from "../lib/axios";
export const signInService = async ({ email, password }) => {
    const response = await axios.post(ApiEndpoints.singIn(), {
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
    const response = await axios.post(ApiEndpoints.singUp(), info);
    return response;
};

export const verifyUser = async () => {
    const {
        data: {
            dataSource: { userData },
        },
    } = await axios.get(ApiEndpoints.me());

    return userData;
};
