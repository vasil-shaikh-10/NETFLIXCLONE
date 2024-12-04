import axios from 'axios'
import { ENV_VARS } from '../configs/envVars.js';
export const fetchFromTMDB = async(url) =>{
    const options = {
        headers: {
        accept: "application/json",
        Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`
        }
    };
    try {
        console.log("Fetching URL:", url);
        console.log("TMDB API Key:", options);
        const response = await axios.get(url, options);
        console.log("Response Data:", response);
        return response.data;
    } catch (err) {
        console.error("Fetch Error:", err.message);
        throw err;
    }

}

