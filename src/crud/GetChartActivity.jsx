import axiosService from "../service/axiosService";

export const GetChartActivity = async (id) => {
    try {
        const method = 'GET';
        const url = `http://localhost:3000/activities/weekly-activity/${id}`;
        const body = {}

        const response = await axiosService(method, url, body);

        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}