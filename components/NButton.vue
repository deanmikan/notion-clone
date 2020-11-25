<template>
  <div
    class="rounded n-button d-flex align-center"
    :class="!dense && 'px-2 py-1'"
    :style="{ width: block ? 'auto' : 'fit-content', color: textColor }"
    v-on="$listeners"
  >
    <v-icon v-if="$props.icon" left size="16" :color="textColor">
      {{ icon }}
    </v-icon>
    <slot />
  </div>
</template>

<script>
// Vuex/services/mixins

// Components

// Third party plugins

export default {
  mixins: [],
  components: {},
  props: {
    text: String,
    dense: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    icon: String,
    textColor: String,
  },
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

<style lang="scss">
.n-button {
  font-size: 14px;
  transition: background 50ms ease-in 0s;
  cursor: pointer;
  -webkit-user-select: none;

  &:active {
    background: red;
  }

  &:hover {
    background: rgb(71, 76, 80);
  }
}
</style>
