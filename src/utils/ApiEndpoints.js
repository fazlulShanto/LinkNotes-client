import { baseUrl } from "../exports";
const ApiEndpoints = {
    singIn: () => `${baseUrl}/api/user/log-in`,
    singUp: () => `${baseUrl}/api/user/sign-up`,
    dummyData: () => `${baseUrl}/api/dummy-data`,
    me: () => `${baseUrl}/api/user/me`,
    notes: () => `${baseUrl}/api/notes`,
    getAllNotes: () => `${baseUrl}/api/notes`,
    createANewNotes: () => `${baseUrl}/api/notes`,
    deleteNotes: () => `${baseUrl}/api/notes`,
};

export default ApiEndpoints;
