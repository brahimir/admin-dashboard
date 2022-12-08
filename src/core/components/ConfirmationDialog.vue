<template>
  <v-dialog v-model="dialog" :width="width">
    <template v-slot:activator="{ on, attrs }">
      <!-- start:: Toggle Confirmation Button -->
      <v-btn
        :disabled="disabled"
        :class="{ 'text-white': dialogButtonIsTextWhite }"
        :width="dialogButtonWidth"
        :height="dialogButtonHeight"
        :color="dialogButtonColor"
        :block="dialogButtonIsBlock"
        :tile="dialogButtonIsTile"
        :small="dialogButtonIsSmall"
        :x-small="dialogButtonIsXSmall"
        :fab="dialogButtonIsFab"
        :icon="dialogButtonIsIcon"
        :text="dialogButtonIsText"
        :elevation="elevation"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon v-if="dialogButtonIcon" :small="dialogButtonIconSmall">
          {{ dialogButtonIcon }}
        </v-icon>
        {{ dialogButtonText }}
      </v-btn>
      <!-- end:: Toggle Confirmation Button -->
    </template>

    <!-- start:: Confirmation Modal -->
    <v-card>
      <v-card-title class="headline">{{ headerTitle }}</v-card-title>
      <v-card-text>{{ confirmationMessage }}</v-card-text>

      <!-- start:: Actions -->
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn :color="acceptColor ? acceptColor : 'red'" text @click="confirmed">
          {{ acceptText }}
        </v-btn>

        <v-btn :color="declineColor" @click="dialog = false">
          {{ declineText }}
        </v-btn>
      </v-card-actions>
      <!-- end:: Actions -->
    </v-card>
    <!-- end:: Confirmation Modal -->
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ConfirmationDialog",
  props: {
    disabled: Boolean,
    width: Number,
    height: Number,
    elevation: Number,
    dialogButtonWidth: Number,
    dialogButtonHeight: Number,
    dialogButtonText: String,
    dialogButtonColor: String,
    dialogButtonIcon: String,
    dialogButtonIconSmall: Boolean,
    dialogButtonIsBlock: Boolean,
    dialogButtonIsTile: Boolean,
    dialogButtonIsFab: Boolean,
    dialogButtonIsIcon: Boolean,
    dialogButtonIsText: Boolean,
    dialogButtonIsTextWhite: Boolean,
    dialogButtonIsSmall: Boolean,
    dialogButtonIsXSmall: Boolean,
    headerTitle: String,
    confirmationMessage: String,
    acceptText: String,
    acceptColor: String,
    declineText: String,
    declineColor: String
  },

  data() {
    return {
      dialog: false
    };
  },

  methods: {
    confirmed: function (): void {
      this.$emit("is-confirmed", true);
      this.dialog = false;
    }
  }
});
</script>

<style lang="scss" scoped></style>
