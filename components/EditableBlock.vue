<template>
  <CommandMenu
    v-model="commandMenu"
    ref="editableMenu"
    :key="block.tag"
    @select="updateTag"
  >
    <component
      ref="editable"
      contenteditable
      class="block"
      v-on="listeners"
      v-html="html"
      style="width: 100%"
      :placeholder="commandItem ? commandItem.label : _placeholder"
      :id="block.id"
      :is="block.tag"
      @keydown="onKeyDown"
      @focus="focused = true"
      @blur="focused = false"
    >
    </component>
  </CommandMenu>
</template>

<script>
// Vuex/services/mixins
import domMixin from "@/mixins/domMixin";

// Components
import CommandMenu from "@/components/CommandMenu";

// Third party plugins

export default {
  mixins: [domMixin],
  components: { CommandMenu },
  props: {
    block: Object,
  },
  validations: {},
  data() {
    return {
      htmlBackup: null,
      previousKey: null,
      commandMenu: false,
      commandItem: null,
      focused: false,
      html: null,
    };
  },
  created() {},
  mounted() {
    this.html = this.block.html;
    this.$refs.editable.innerText = this.html;
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
      };
    },
    _placeholder() {
      if (this.block.forcePlaceholder || this.focused) {
        return this.block.placeholder || "Type '/' for commands";
      } else {
        return "";
      }
    },
  },
  methods: {
    getNewId() {
      return "axxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    async updateTag(commandItem) {
      this.commandMenu = false;
      this.commandItem = commandItem;

      if (commandItem.id == "page") {
        const newPage = {
          id: this.getNewId(),
          parent: this.block.page,
        };

        await this.$store.dispatch("addPage", newPage).then(() => {
          this.$store.dispatch("addBlock", {
            id: this.getNewId(),
            order: 1,
            page: newPage.id,
            html: "",
            placeholder: "Untitled",
            forcePlaceholder: true,
            noCommands: true,
            tag: "h4",
          });
        });

        this.$store.dispatch("editBlock", {
          ...this.block,
          toPage: newPage.id,
          tag: "div",
          html: null,
        });

        this.$store.dispatch("addBlock", {
          id: this.getNewId(),
          page: this.block.page,
          html: "",
          tag: "p",
          order: this.block.order + 0.01,
          forcePlaceholder: true,
        });

        this.$router.push({ name: "page", params: { page: newPage.id } });
      } else {
        this.$store.dispatch("editBlock", {
          ...this.block,
          tag: commandItem.tag,
          html: this.htmlBackup,
        });
      }

      setTimeout(() => {
        this.$refs.editable.innerText = this.block.html;
        this.setCaretToEnd(this.$refs.editable);
        this.$refs.editable.focus();
      }, 0);
    },
    onInput(e) {
      this.$store.dispatch("editBlock", {
        ...this.block,
        html: e.target.innerText,
      });
    },
    onKeyDown(e) {
      if (this.commandMenu) {
        this.$refs.editableMenu.onKeyDown(e);
        return;
      }

      switch (e.key) {
        case "/":
          if (!this.block.noCommands) {
            this.htmlBackup = this.block.html;
            this.commandMenu = true;
          }
          break;

        case "Enter":
          if (this.previousKey != "Shift") {
            e.preventDefault();
            this.$emit("add-block", e.target);
          }
          break;

        case "Backspace":
          if (!this.block.html) {
            e.preventDefault();
            this.$emit("delete-block", e.target);
          }
          break;

        case "ArrowUp":
          e.preventDefault();

          const previousElement = this.getPreviousSibling(
            this.$refs.editable,
            ".block"
          );

          if (previousElement) {
            previousElement.focus();
            this.setCaretToEnd(previousElement);
          }
          break;

        case "ArrowDown":
          e.preventDefault();
          const nextElement = this.getNextSibling(
            this.$refs.editable,
            ".block"
          );

          if (nextElement) {
            nextElement.focus();
            this.setCaretToEnd(nextElement);
          }
          break;

        default:
          break;
      }
      this.previousKey = e.key;
    },
    setCaretToEnd(element) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      element.focus();
    },
  },
  watch: {
    "block.id": {
      handler(val) {
        this.html = this.block.html;
        this.$refs.editable.innerText = this.html;
      },
    },
  },
  provide() {
    return {};
  },
};
</script>

<style lang="scss">
.block {
  // background: rgba(255, 255, 255, 0.01);
  border-radius: 5px;
  padding: 2px 0px;
  margin-bottom: 5px !important;
  outline: none;
  cursor: text;

  &:focus {
    // background: rgba(255, 255, 255, 0.01);
  }

  &:empty:before {
    content: attr(placeholder);
    color: rgba(255, 255, 255, 0.2) !important;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.2) !important;
  }
}
</style>
