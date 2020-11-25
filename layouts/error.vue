<template>
  <v-row v-else class="align-self-start" justify="center">
    <v-col cols="auto" class="text-center" style="margin-top: 200px">
      <h2>Oops... something went wrong 😖</h2>
      <p>Sorry about that, click a page on the left nav bar</p>
    </v-col>
  </v-row>
</template>

<script>
// Vuex/services/mixins

// Components

// Third party plugins

export default {
  mixins: [],
  components: {},
  props: ["error"],
  validations: {},
  data() {
    return {};
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
