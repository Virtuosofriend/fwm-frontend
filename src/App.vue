<template>
    <v-app>
        <v-container fluid class="pa-0 m-0">
            <v-row no-gutters>
                <v-col cols="12">
                    <router-view name="topbar" />
                </v-col>
                <v-col cols="12">
                    <router-view name="main" />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>

export default {
    name: "Main__App",

    data: () => ({
        //
    })
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;800&display=swap');
@import url("./sass/common.scss");
</style>