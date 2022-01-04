<template>
  <div id="app">
    <router-view />
    <notifications class="mt-4" position="top right" />
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
<style>
  .vue-notification {
    margin: 0 5px 5px;
    padding: 12px !important;
    font-size: 16px !important;
    color: #ffffff;

    background: #44a4fc;
    border-left: 5px solid #187fe7;
  }
</style>
