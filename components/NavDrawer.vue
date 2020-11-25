<template>
  <v-navigation-drawer
    app
    stateless
    floating
    width="240"
    color="rgb(55, 60, 63)"
    :value="true"
  >
    <v-list dense>
      <v-list-item-group active-class="command-menu-active">
        <v-list-item link class="py-3" :ripple="false">
          <div class="mr-1">
            <v-img
              width="24"
              height="24"
              class="rounded-circle"
              :src="require('@/assets/headshot.jpg')"
            ></v-img>
          </div>

          <v-list-item-content>
            <v-list-item-title style="color: rgba(255, 255, 255, 0.9)">
              deanmikan
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="item in items"
          link
          :ripple="false"
          :key="item.text"
        >
          <v-list-item-icon class="mr-1">
            <v-icon size="17" color="rgba(255, 255, 255, 0.6)">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: rgba(255, 255, 255, 0.6)">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-list dense>
      <v-list-item-group active-class="command-menu-active">
        <div
          class="px-4 py-2 font-weight-bold text--disabled"
          style="font-size: 11.5px !important; letter-spacing: 0.03em"
        >
          PRIVATE
        </div>

        <v-list-item
          v-for="item in getPages"
          link
          :to="item.id"
          :ripple="false"
          :key="item.id"
        >
          <v-list-item-icon class="mr-0">
            <v-icon size="20" color="rgba(255, 255, 255, 0.6)">
              mdi-menu-right
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: rgba(255, 255, 255, 0.6)">
              {{ pageTitle(item.id) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-list dense>
      <v-list-item-group active-class="command-menu-active">
        <v-list-item
          v-for="item in extraItems"
          link
          :ripple="false"
          :key="item.text"
        >
          <v-list-item-icon class="mr-1">
            <v-icon size="17" color="rgba(255, 255, 255, 0.6)">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: rgba(255, 255, 255, 0.6)">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Vuex/services/mixins
import { mapGetters } from "vuex";

// Components

// Third party plugins

export default {
  mixins: [],
  components: {},
  props: {},
  validations: {},
  data() {
    return {
      selectedItem: null,
      items: [
        {
          icon: "mdi-magnify",
          text: "Quick Find",
        },
        {
          icon: "mdi-clock-time-three-outline",
          text: "All Updates",
        },
        {
          icon: "mdi-cog",
          text: "Settings & Members",
        },
      ],
      extraItems: [
        {
          icon: "mdi-shape",
          text: "Templates",
        },
        {
          icon: "mdi-arrow-collapse-down",
          text: "Import",
        },
        {
          icon: "mdi-trash-can",
          text: "Trash",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["getPages"]),
  },
  methods: {
    pageTitle(id) {
      return this.$store.getters["getPageTitleById"](id);
    },
  },
  watch: {},
  provide() {
    return {};
  },
  inject: [],
};
</script>

<style lang="scss"></style>
