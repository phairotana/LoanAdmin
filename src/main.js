import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import store from "./store";
import Notifications from '@kyvg/vue3-notification';
import VueSweetalert2 from "vue-sweetalert2";
import VueTelInput from 'vue3-tel-input';
import print from 'vue3-print-nb';
import "element-plus/lib/theme-chalk/index.css";
import "sweetalert2/dist/sweetalert2.min.css";
import 'vue3-tel-input/dist/vue3-tel-input.css';


const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(store);
appInstance.use(Notifications);
appInstance.use(VueSweetalert2);
appInstance.use(VueTelInput);
appInstance.use(print);
appInstance.mount("#app");
