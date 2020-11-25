<template>
  <v-app>
    <AppBar />

    <NavDrawer />

    <v-main>
      <v-container fill-height pa-0 style="position: relative">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import NavDrawer from "@/components/NavDrawer";

export default {
  components: {
    AppBar,
    NavDrawer,
  },
  async fetch() {
    await this.$store.dispatch("init");
  },
};
</script>
