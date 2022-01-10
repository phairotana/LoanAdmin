// Import
import axios from "axios";
import store from "@/store";
// Create
const service = axios.create({
  // baseURL: "http://localhost:8000/",
  baseURL: "https://global-loan.herokuapp.com/",
});

// Token
if (store.getters.getLoggedUser) {
  service.defaults.headers.common["Authorization"] =
    "Bearer " + store.getters.getLoggedUser.access_token;
}

// Request Interceptor
service.interceptors.request.use(
  (config) => {
    store.dispatch("displayLoader", true);

    return config;
  },
  (error) => {
    store.dispatch("displayLoader", false);

    return Promise.reject(error);
  }
);

// Response Interceptor
service.interceptors.response.use(
  (response) => {
    store.dispatch("displayLoader", false);

    return response;
  },
  (error) => {
    store.dispatch("displayLoader", false);

    if (error.response) {
      // Session Expired
      if (401 === error.response.status) {
        this.$router.go();
        // store.dispatch("logOut");
      }

      // 404
      if (error.response.status == 404) {
        this.$notify({
          type: "error",
          text: "Page not found!",
        });
      }
    }

    return Promise.reject(error);
  }
);

// Export axios
export default service;
