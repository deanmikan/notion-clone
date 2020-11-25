<template>
  <v-row
    v-if="!$fetchState.pending"
    no-gutters
    class="align-self-start align-items-stretch"
    justify="center"
  >
    <v-col cols="11" lg="8" xl="5">
      <PageControls :page="page" />
      <Page :page="page" />
    </v-col>
  </v-row>

  <v-row v-else class="align-self-start" justify="center">
    <v-col cols="auto" style="margin-top: 200px">
      <v-progress-circular indeterminate color="grey"></v-progress-circular>
    </v-col>
  </v-row>
</template>

<script>
// Vuex/services/mixins

// Components
import Page from "@/components/Page";
import PageControls from "@/components/PageControls";

// Third party plugins

export default {
  head() {
    return {
      title: this.$store.getters["getPageTitleById"](this.$route.params.page),
    };
  },
  mixins: [],
  components: {
    Page,
    PageControls,
  },
  validations: {},
  data() {
    return {
      page: null,
    };
  },
  fetchOnServer: false,
  async fetch() {
    this.page = await this.$store.getters["getPageById"](
      this.$route.params.page
    );

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, Math.max(0.3, Math.random() * 2000));
    });
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {},
  provide() {
    return {};
  },
  inject: [],
};
</script>

<style lang="scss"></style>
