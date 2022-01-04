<template>
  <div id="app">
    <router-view />
    <notifications />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      displayLoader: "getDisplayLoader",
    }),
  },
};
</script>
