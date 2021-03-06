<template>
    <div class="home">
        <generic-map></generic-map>
    </div>
</template>

<script>
import GenericMap from "@/components/Map/GenericMap.vue";

export default {
    name: "Home",
    components: { 
        GenericMap 
    },
};
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    width: 100vw;
}
</style>