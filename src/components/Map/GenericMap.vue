<template>
    <l-map 
        ref="theMap" 
        class="map"
        :zoom="zoom"
        :center="center"
        @ready="initMap()"
    >
        <l-tile-layer :url="url"></l-tile-layer>
        <slot name="geojson"></slot>
    </l-map>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import { CONFIG } from "@/commons/config";
export default {
    name: "Leaflet__map",

    props: {
        bbox: {
            required:   false,
            type:       Array,
            default:    () => {
                return CONFIG.bounds
            }
        }
    },

    data () {
        return {
            url: "https://api.mapbox.com/styles/v1/virtuosofriend/cipcir9ze005lcqniifuijd3u/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmlydHVvc29mcmllbmQiLCJhIjoiY2lwY2lvc3ZjMDAyNnZobm5haDZ1M2VrcSJ9.IGVbY93V5cF7KvEVJnmUTQ",
            zoom:   CONFIG.default_zoom_level,
            center: CONFIG.lamia_center,
        };
    },

    methods: {
        initMap() {
            const map = this.$refs.theMap.mapObject;
            map._onResize();
            map.setMaxBounds(this.bbox);
        },

    },

    components: {
        LMap,
        LTileLayer
    },
}
</script>

<style lang="scss" scoped>
.map {
    height: 100%;
    width: 100%;
}
</style>