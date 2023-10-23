import axiosService from "../service/axiosService";

export const GetUser = async (id) => {
    try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/users/${id}`; //.env
        const body = {}


        const response = await axiosService(method, url, body);
        return response

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}