<template>
  <div id="app-snackbar">
    <!-- start:: Error Snackbar -->
    <v-snackbar v-if="errorMessage" v-model="errorMessage" color="error" :min-height="minHeight">
      <v-alert type="error" class="m-0 no-padding">
        {{ errorMessage }}
      </v-alert>

      <template v-slot:action="{ attrs }">
        <v-btn text icon v-bind="attrs" @click="CLEAR_ERROR_MESSAGE()">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <!-- end:: Error Snackbar -->

    <!-- start:: Success Snackbar -->
    <v-snackbar v-if="successMessage" v-model="successMessage" color="success" :min-height="minHeight">
      <v-alert type="success" class="m-0 no-padding">
        {{ successMessage }}
      </v-alert>

      <template v-slot:action="{ attrs }">
        <v-btn text icon v-bind="attrs" @click="CLEAR_SUCCESS_MESSAGE()">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <!-- end:: Success Snackbar -->

    <!-- start:: Info Snackbar -->
    <v-snackbar v-if="infoMessage" v-model="infoMessage" color="info" :min-height="minHeight">
      <v-alert type="info" class="m-0 no-padding">
        {{ infoMessage }}
      </v-alert>

      <template v-slot:action="{ attrs }">
        <v-btn text icon v-bind="attrs" @click="CLEAR_INFO_MESSAGE()">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <!-- end:: Info Snackbar -->
  </div>
</template>

<script lang="ts">
// Vue
import Vue from "vue";

export default Vue.extend({
  name: "AppSnackbar",

  data() {
    return {
      minHeight: 50
    };
  }

  // computed: {
  //   ...mapGetters({
  //     errorMessage: "appMessages/getErrorMessage",
  //     successMessage: "appMessages/getSuccessMessage",
  //     infoMessage: "appMessages/getInfoMessage"
  //   })
  // },

  // methods: {
  //   ...mapActions("appMessages", {
  //     CLEAR_ERROR_MESSAGE: "CLEAR_ERROR_MESSAGE",
  //     CLEAR_SUCCESS_MESSAGE: "CLEAR_SUCCESS_MESSAGE",
  //     CLEAR_INFO_MESSAGE: "CLEAR_INFO_MESSAGE"
  //   })
  // }
});
</script>

<style lang="scss" scoped></style>
