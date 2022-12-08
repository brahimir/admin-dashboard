<template>
  <div id="layout" :class="{ 'flex-centered': isFlexCentered }" class="page-white">
    <SideBar />

    <v-main>
      <HeaderBar />

      <!-- begin:: Content -->
      <v-sheet id="content" class="page-white overflow-y-auto">
        <router-view />
      </v-sheet>
      <!-- end:: Content -->
    </v-main>

    <AppSnackbar />
  </div>
</template>

<script lang="ts">
// Vue
import { computed, defineComponent } from "vue";
// Components
import SideBar from "@/core/components/layout/SideBar.vue";
import HeaderBar from "@/core/components/layout/HeaderBar.vue";
import AppSnackbar from "@/core/components/layout/AppSnackbar.vue";

export default defineComponent({
  name: "Layout",
  components: { SideBar, HeaderBar, AppSnackbar },

  setup() {
    const isFlexCentered = computed(() => {
      // if (!this.isAuthenticated) return true;
      // if (this.$route.name === "Calendar") return true;
      // if (this.$route.name === "Dispatch - Job Scheduler") return true;

      return false;
    });

    return {
      isFlexCentered
    };
  }
});
</script>

<style lang="scss" scoped>
#layout {
  height: 100%;
}

#content {
  padding-block: 1rem;
  padding-inline: 0.5rem;
}
</style>
