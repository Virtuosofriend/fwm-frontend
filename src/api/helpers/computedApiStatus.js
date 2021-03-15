import { apiStatus } from "../constants/apiStatus";

export const apiStatusComputed = ( reactivePropertyKey = "" ) => {
    let computed = {};

    for ( const [statusKey, statusValue] of Object.entries(apiStatus) ) {
        computed[`${reactivePropertyKey}${statusKey}`] = function() {
            return this[reactivePropertyKey] === statusValue;
        }
    }

    return computed;
}