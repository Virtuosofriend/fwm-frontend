<template>
    <div class="header">
        <img 
            alt="Fthiotis Weather Map" 
            src="../assets/logos/logo.png" 
            class="header__logo "/>
    </div>
</template>

<script>
export default {
    name:   "Menu__sidebar",

    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
}
.header__logo {
    position: absolute;
    z-index: 999;
    object-fit: contain;
    width: 150px;
}
</style>