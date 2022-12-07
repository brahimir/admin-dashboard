<template>
  <v-app id="app">
    <Layout />
  </v-app>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref } from "vue";
// Layout
import Layout from "@/core/components/layout/_Layout.vue";

export default defineComponent({
  name: "App",
  components: { Layout }
});
</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
