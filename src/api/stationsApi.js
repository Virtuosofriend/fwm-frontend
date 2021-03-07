import api from "./api";

const URLS = {
    fetchConditions: "getweatherdata.php?getcurrentconditionsgeojson=true"
};

export const fetchStations = () => {
    return api.get(URLS.fetchConditions);
}