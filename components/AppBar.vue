<template>
  <v-app-bar app flat height="45" color="transparent">
    <v-breadcrumbs class="pa-0" :items="items">
      <template v-slot:item="{ item }">
        <n-button
          @click="$router.push({ name: 'page', params: { page: item.id } })"
          >{{ item.text }}</n-button
        >
      </template>
    </v-breadcrumbs>

    <v-spacer></v-spacer>
    <n-button>Share</n-button>
    <n-button icon="mdi-check">
      <span>Updates</span>
    </n-button>
    <n-button>Favourite</n-button>
    <n-button>
      <v-icon>mdi-dots-horizontal</v-icon>
    </n-button>
  </v-app-bar>
</template>

<script>
// Vuex/services/mixins

// Components
import nbutton from "@/components/NButton";

// Third party plugins
import _ from "lodash";

export default {
  mixins: [],
  components: {
    "n-button": nbutton,
  },
  props: {},
  validations: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    items() {
      var crumbs = [];

      var currentPage = this.$store.getters["getPageById"](
        this.$route.params.page
      );

      if (currentPage) {
        while (currentPage.parent) {
          currentPage = this.$store.getters["getPageById"](currentPage.parent);
          crumbs.push({
            text: this.$store.getters["getPageTitleById"](currentPage.id),
            id: currentPage.id,
          });
        }

        crumbs = _.reverse(crumbs);
      }

      crumbs.push({
        text: this.$store.getters["getPageTitleById"](this.$route.params.page),
        id: this.$route.params.page,
      });

      return crumbs;
    },
  },
  methods: {},
  watch: {},
  provide() {
    return {};
  },
  inject: [],
};
</script>

<style lang="scss"></style>
