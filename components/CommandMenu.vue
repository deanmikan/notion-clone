<template>
  <v-menu
    offset-y
    bottom
    nudge-bottom="5"
    max-width="324"
    v-model="menu"
    @keydown="onKeyDown"
  >
    <template v-slot:activator="{ on, attrs }">
      <slot />
    </template>

    <v-list dense class="pa-0 pb-2" color="rgb(63, 68, 71)">
      <div
        class="px-4 py-2 font-weight-medium text--disabled"
        style="font-size: 11px !important"
      >
        BASIC BLOCKS
      </div>
      <v-list-item-group
        v-model="selectedItem"
        active-class="command-menu-active"
      >
        <v-list-item
          v-for="item in _items"
          class="px-4 py-1"
          style="transition: background 20ms ease-in 0s"
          :key="item.id"
          @click="$emit('select', item)"
        >
          <div class="pr-2">
            <v-img
              class="rounded white"
              width="46"
              height="46"
              :src="item.img"
            />
          </div>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.label }}
            </v-list-item-title>
            <v-list-item-subtitle class="text--disabled font-weight-regular">
              {{ item.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
// Vuex/services/mixins

// Components

// Third party plugins

export default {
  mixins: [],
  components: {},
  props: { value: {} },
  validations: {},
  data() {
    return {
      items: [
        {
          id: "text",
          tag: "p",
          label: "Text",
          description: "Just startt writing with plain text.",
          img: "https://www.notion.so/images/blocks/text.9fdb530b.png",
        },
        {
          id: "heading-1",
          tag: "h1",
          label: "Heading 1",
          description: "Big section heading.",
          img: "https://www.notion.so/images/blocks/header.57a7576a.png",
        },
        {
          id: "heading-2",
          tag: "h2",
          label: "Heading 2",
          description: "Medium section heading.",
          img: "https://www.notion.so/images/blocks/subheader.9aab4769.png",
        },
        {
          id: "heading-3",
          tag: "h3",
          label: "Heading 3",
          description: "Small section heading.",
          img: "https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png",
        },
        {
          id: "page",
          tag: null,
          label: "Page",
          description: "Embed a sub-page inside this page.",
          img: "https://www.notion.so/images/blocks/page.83b0bf31.png",
        },
      ],
      selectedItem: 0,
      searchedItems: [],
      command: "",
      menu: false,
    };
  },
  created() {},
  mounted() {},
  computed: {
    _items() {
      if (this.command.length > 0) {
        return this.searchedItems;
      } else {
        return this.items;
      }
    },
    elId() {
      if (this.elementId) {
        return "#" + this.elementId;
      } else {
        return null;
      }
    },
    posX() {
      if (this.elId) {
        console.log(document.querySelector(this.elId));
        var rect = document.querySelector(this.elId).getBoundingClientRect();

        return rect.left;
      } else {
        return null;
      }
    },
    posY() {
      if (this.elId) {
        var rect = document.querySelector(this.elId).getBoundingClientRect();

        return rect.bottom - 500;
      } else {
        return null;
      }
    },
  },
  methods: {
    onKeyDown(e) {
      if (!this.value) {
        return;
      }

      switch (e.key) {
        case "Enter":
          e.preventDefault();
          this.$emit("select", this._items[this.selectedItem]);
          this.menu = false;
          break;

        case "Backspace":
          if (!this.command) this.menu = false;
          this.command = this.command.substring(0, this.command.length - 1);
          break;

        case "ArrowUp":
          e.preventDefault();
          const prevSelected =
            this.selectedItem == 0
              ? this._items.length - 1
              : this.selectedItem - 1;
          this.selectedItem = prevSelected;
          break;

        case "ArrowDown":
          e.preventDefault();
          const nextSelected =
            this.selectedItem === this._items.length - 1
              ? 0
              : this.selectedItem + 1;
          this.selectedItem = nextSelected;
          break;

        default:
          this.command = this.command + e.key;

          this.$search(this.command, this.items, {
            keys: ["tag", "label"],
          }).then((results) => {
            this.searchedItems = results;
            this.selectedItem = 0;
          });
          break;
      }
    },
  },
  watch: {
    value(val) {
      val && (this.menu = true);
    },
    menu(val) {
      !val && this.$emit("input", false);
      val && (this.selectedItem = 0);
    },
  },
  provide() {
    return {};
  },
  inject: [],
};
</script>

<style lang="scss">
.command-menu-active {
  background: rgb(71, 76, 80) !important;
}
</style>
