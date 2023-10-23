import axiosService from '../service/axiosService'; // Import your axiosService here

export const GetActivityById = async (id) => {
    try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/activities/${id}`;
        const body = {}

        const response = await axiosService(method, url, body);

        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}