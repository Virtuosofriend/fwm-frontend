<template>
    <span>
        <l-marker
            v-for="(item,index) in stationsData"
            :key="index"
            :lat-lng="item.coordinates"
        >
            <l-icon
                :icon-anchor="staticAnchor"
            >
                <div class="headline">
                    <code>
                        {{ item.station }}
                    </code>
                </div>
                <img src="../../assets/weather_icons/sunny.png" class="iconClass">
            </l-icon>
        </l-marker>
    </span>
</template>

<script>
import { LMarker, LIcon } from 'vue2-leaflet';
export default {
    name: "Stations__markers",

    props: {
        stationsData: {
            required:   true,
            type:       Array,
        }
    },

    data() {
        return {
            staticAnchor: [16, 37],
        }
    },

    components: {
        LMarker,
        LIcon
    },

    mounted() {
        console.log(this.stationsData)
    }
}
</script>

<style lang="scss" scoped>
.iconClass {
    width: 48px;
    height: 48px;
}
</style>