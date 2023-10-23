import axiosService from '../service/axiosService'; // Import your axiosService here
import { useAuth } from "../components/auth/AuthContext";


export const GetActivityTodayDataById = async (id, setActivities, setHaveCard) => {
    try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/activities/getToday/${id}`;
        const body = {}

        const response = await axiosService(method, url, body);


        let sortData = [...response].reverse();
        console.log("sortData => ", sortData)

        setActivities(sortData);

        if (response.length > 0) {
            setHaveCard(true);
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};