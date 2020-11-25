<template>
  <v-hover v-slot="{ hover }">
    <v-row
      no-gutters
      justify="end"
      class="flex-column flex-nowrap"
      :style="{
        minHeight: page.emoji ? '150px' : '104px',
      }"
    >
      <v-img
        v-if="page.img"
        style="position: absolute; left: 0; top: 0"
        height="250"
        width="100%"
        :src="page.img"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-col
        v-if="page.emoji"
        cols="auto"
        style="z-index: 1"
        :style="{
          marginTop: page.img ? '210px' : '',
        }"
      >
        <n-button dense>
          <span style="font-size: 50px">{{ page.emoji }}</span>
        </n-button>
      </v-col>

      <v-col
        cols="auto"
        style="min-height: 29px"
        :style="{
          marginTop: page.img && !page.emoji ? '260px' : '',
        }"
      >
        <v-fade-transition>
          <div class="d-flex" v-if="hover">
            <n-button
              v-if="!page.emoji"
              text-color="rgba(255, 255, 255, 0.4)"
              icon="mdi-emoticon"
              @click="addEmoji"
            >
              Add icon
            </n-button>

            <n-button
              v-if="!page.img"
              text-color="rgba(255, 255, 255, 0.4)"
              icon="mdi-image"
              @click="addCover"
            >
              Add cover
            </n-button>

            <n-button
              text-color="rgba(255, 255, 255, 0.4)"
              icon="mdi-comment-text"
            >
              Add comment
            </n-button>
          </div>
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-hover>
</template>

<script>
// Vuex/services/mixins

// Components
import nbutton from "@/components/NButton";

// Third party plugins
import emojis from "./emojis";
import _ from "lodash";

export default {
  mixins: [],
  components: {
    "n-button": nbutton,
  },
  props: {
    page: Object,
  },
  validations: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    addEmoji() {
      if (!this.page.emoji) {
        this.page.emoji = _.sample(emojis);
        this.$store.commit("EDIT_PAGE", this.page);
      }
    },
    addCover() {
      if (!this.page.img) {
        this.page.img =
          "https://images.unsplash.com/photo-1547280528-5f9e9bfdef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
        this.$store.commit("EDIT_PAGE", this.page);
      }
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
