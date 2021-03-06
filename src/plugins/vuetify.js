import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary:    "#fff",
                secondary:  "#5d6268",
                accent:     "#2596be",
                link:       "#fbd446",
                error:      "#FF5252",
                info:       "#2196F3",
                success:    "#4CAF50",
                warning:    "#FFC107"
            }
        }
    },
    icons: {
        iconfont: "mdi"
    }
});
