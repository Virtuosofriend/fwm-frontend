<template>
    <div class="home">
        <generic-map>
            <template #geojson>
                <stations-markers
                    :stationsData="stations"
                    v-if="stations.length > 0"
                ></stations-markers>
            </template>
        </generic-map>
    </div>
</template>

<script>
import { fetchStations } from "@/api/stationsApi";
import { withAsync } from "@/helpers/withAsync";
import { apiStatus } from "@/api/constants/apiStatus";
import { apiStatusComputed } from "@/api/helpers/computedApiStatus";

import GenericMap from "@/components/Map/GenericMap.vue";
import StationsMarkers from "@/components/General/StationsMarkers.vue";

const { Idle, Pending, Error, Success } = apiStatus;

export default {
    name: "Home",

    data() {
        return {
            stations: [],
            stations_status: apiStatus.Idle
        }
    },

    computed: {
        ...apiStatusComputed("stations_status")
    },

    methods: {
        async fetchStations() {
            this.stations_status = apiStatus.Pending;
            const {response, error} = await withAsync(fetchStations);

            if ( error ) {
                this.stations_status = apiStatus.Error;
                return;
            }
            let result = response.data.features.map(elem => {
                return {
                    coordinates: [elem.geometry.coordinates[1], elem.geometry.coordinates[0]],
                    ...elem.properties
                }
            });
            this.stations = result;
            this.stations_status = apiStatus.Success;
        }
    },

     components: { 
        GenericMap,
        StationsMarkers
    },

    created() {
        this.fetchStations();
    }
};
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    width: 100vw;
}
</style>