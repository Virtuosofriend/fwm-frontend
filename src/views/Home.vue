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

import GenericMap from "@/components/Map/GenericMap.vue";
import StationsMarkers from "@/components/General/StationsMarkers.vue";

export default {
    name: "Home",

    data() {
      
        return {
            stations: []
        }
    },

    methods: {
        async fetchStations() {
            const response = await fetchStations();
            let result = response.data.features.map(elem => {
                return {
                    coordinates: [elem.geometry.coordinates[1], elem.geometry.coordinates[0]],
                    ...elem.properties
                }
            });
            this.stations = result;
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