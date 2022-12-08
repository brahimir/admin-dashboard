<template>
  <v-app-bar app clipped-left color="white accent-4" elevation="2">
    <!-- start:: Company Name and Logo -->
    <router-link :to="{ name: 'Home' }">
      <v-list-item-avatar>
        <img src="@/assets/img/sample-logo/android-chrome-512x512.png" />
      </v-list-item-avatar>
    </router-link>

    <h4 class="m-0">Application Name</h4>
    <!-- end:: Company Name and Logo -->

    <v-spacer></v-spacer>

    <!-- start:: User Menu -->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
          <span class="pl-2">Firstname</span>
          <span class="pl-2">Lastname</span>
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <!-- start:: Logout Button -->
        <v-list-item @click="logout()">
          <v-list-item-title>
            <v-icon left>mdi-logout</v-icon>
            Logout
          </v-list-item-title>
        </v-list-item>
        <!-- end:: Logout Button -->
      </v-list>
    </v-menu>
    <!-- end:: User Menu -->

    <v-btn icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderBar",
  setup() {
    const toggleAside = ref(false);

    function logout(): void {
      // TODO
    }

    return {
      toggleAside,

      logout
    };
  }
});
</script>
