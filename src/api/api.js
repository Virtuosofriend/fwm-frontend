import axios from "axios";

const axiosParams = {
    baseURL: process.env.VUE_APP_baseURL || "http://map.lamiaweather.com/php/"
};

// Axios instance
const axiosInstance = axios.create(axiosParams);

// Main api function
const api = axios => {
    const logger = async promise => 
        promise.catch( error => {
            if ( process.env.NODE_ENV !== "development" ) throw error;

            if ( error.response ) {
                // Any errors
                console.log(error.response);
            } else if ( error.request ) {
                // No response at all
                console.log(error.request);
            } else {
                // Something else happened that triggered an error
                console.error("Error", error.message);
            }

            console.log(error.config);
            throw error;
        });

    return {
        get: (url, config) => logger(axios.get(url, config)),
        post: (url, body, config) => logger(axios.post(url, body, config)),
        patch: (url, body, config) => logger(axios.patch(url, body, config)),
        delete: (url, config) => logger(axios.delete(url, config))
    };
};

export default api(axiosInstance);