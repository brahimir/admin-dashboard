<template>
  <v-navigation-drawer
    color="primary"
    dark
    app
    clipped
    permanent
    v-model="drawer"
    :mini-variant.sync="mini"
  >
    <v-list-item class="px-2 py-1">
      <v-list-item-title v-if="!mini" class="text-white ml-2">
        <h5 class="m-0">Menu</h5>
      </v-list-item-title>

      <v-spacer v-if="!mini"></v-spacer>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon v-if="!mini" class="text-white">mdi-arrow-left</v-icon>
        <v-icon v-if="mini" class="text-white">mdi-arrow-right</v-icon>
      </v-btn>
    </v-list-item>

    <!-- <v-divider class="mt-0"></v-divider> -->

    <v-list>
      <div v-for="item in sidebarItems" :key="item.section">
        <h5 v-if="item.section && !mini" class="text-white mt-7 pl-2">
          <v-icon left large>{{ item.icon }}</v-icon>
          {{ item.section }}
        </h5>

        <h6 v-if="mini" class="text-white mt-7 pl-2"></h6>

        <v-list-item link v-for="item in item.items" :key="item.title" :to="item.page" class="">
          <v-list-item-icon>
            <v-icon class="text-white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SideBar",

  setup() {
    // Mini toggle
    const mini = ref(false);
    const drawer = ref(false);

    // Items in the SideBar.
    const sidebarItems = ref([
      {
        section: null,
        icon: null,
        items: [
          {
            title: "Dashboard",
            icon: "mdi-monitor-dashboard",
            page: { name: "Home" }
          }
        ]
      },
      {
        section: null,
        icon: null,
        items: [
          {
            title: "Search",
            icon: "mdi-magnify",
            page: { name: "Home" }
          }
        ]
      },
      {
        section: "Dispatch",
        icon: "mdi-alpha-d-box",
        items: [
          {
            title: "Job Scheduler",
            icon: "mdi-account-hard-hat",
            page: { name: "Dispatch - Job Scheduler" },
            hideFromImpersonation: false
          },
          {
            title: "Customers",
            icon: "mdi-account-group",
            page: { name: "Dispatch - Customers" },
            hideFromImpersonation: true
          }
        ],
        roles: ["Dispatcher", "Administrator", "SystemUser"],
        requiresClient: true
      },
      {
        section: "Administration",
        icon: "mdi-alpha-a-box",
        items: [
          {
            title: "Applications",
            icon: "mdi-dump-truck",
            page: { name: "Administration - Applications" },
            hideFromImpersonation: false
          },
          {
            title: "Materials",
            icon: "mdi-hammer-wrench",
            page: { name: "Administration - Materials" },
            hideFromImpersonation: false
          },
          {
            title: "Quantities",
            icon: "mdi-counter",
            page: { name: "Administration - Quantities" },
            hideFromImpersonation: false
          },
          {
            title: "Quarries",
            icon: "mdi-image-filter-hdr",
            page: { name: "Administration - Quarries" },
            hideFromImpersonation: false
          },
          {
            title: "Users",
            icon: "mdi-account",
            page: { name: "Administration - Users" },
            hideFromImpersonation: false
          },
          {
            title: "Settings",
            icon: "mdi-cog",
            page: { name: "Administration - Settings" },
            hideFromImpersonation: false
          }
        ],
        roles: ["Administrator", "SystemUser"],
        requiresClient: true
      },
      {
        section: "System",
        icon: "mdi-alpha-s-box",
        items: [
          {
            title: "Clients",
            icon: "mdi-account-tie",
            page: { name: "System - Clients" },
            hideFromImpersonation: false
          }
        ],
        roles: ["SystemUser"],
        requiresClient: false
      }
    ]);

    return {
      mini,
      drawer,
      sidebarItems
    };
  }
});
</script>

<style lang="scss" scoped>
.company-logo {
  width: 300px;
  height: 150px;
}

a.v-list-item {
  text-decoration: none;
}

a.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.12);
}
</style>
