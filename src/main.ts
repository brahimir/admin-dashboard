// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Vuetify
import vuetify from "./core/plugins/vuetify";
// dayjs
import dayjs from "dayjs";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Pinia
import { createPinia, PiniaVuePlugin } from "pinia";
// i18n
import VueI18n from "vue-i18n";
import { i18nConfig } from "@/core/i18n/_index";
// FontAwesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { createI18n } from "vue-i18n-composable";
// FontAwesome Usings
library.add(faPhone);
library.add(faVideo);

// Usings
Vue.use(VueI18n);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(PiniaVuePlugin);
Vue.prototype.$dayjs = dayjs;
Vue.component("font-awesome-icon", FontAwesomeIcon);
const pinia = createPinia();

export const i18n = createI18n(i18nConfig);

Vue.config.productionTip = false;

// Mount
new Vue({
  i18n,
  pinia,
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
