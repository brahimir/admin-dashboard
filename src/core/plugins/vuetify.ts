import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#FF8800"
      },
      dark: {
        primary: "#FF8800"
      }
    }
  }
});
