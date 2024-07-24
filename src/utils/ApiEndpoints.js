import { baseUrl } from "../exports";
const ApiEndpoints = {
    singIn: () => `${baseUrl}/api/user/log-in`,
    singUp: () => `${baseUrl}/api/user/sign-up`,
    dummyData: () => `${baseUrl}/api/dummy-data`,
    me: () => `${baseUrl}/api/user/me`,
};

export default ApiEndpoints;
