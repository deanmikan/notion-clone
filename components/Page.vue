<template>
  <div class="page">
    <template v-for="block in blocks">
      <EditableBlock
        v-if="!block.toPage"
        :block="block"
        @open-menu="openCommandMenu(block)"
        @add-block="addBlock($event, block)"
        @delete-block="deleteBlock($event, block)"
        @update-tag="block.tag = $event"
      />
      <n-button
        v-else
        block
        @click="$router.push({ name: 'page', params: { page: block.toPage } })"
      >
        <div class="pr-2">{{ getPageById(block.toPage).emoji || "📄" }}</div>
        <div
          class="font-weight-medium"
          style="border-bottom: 1px solid rgba(255, 255, 255, 0.14)"
        >
          {{
            getBlocksByPageId(block.toPage)[0].html
              ? getBlocksByPageId(block.toPage)[0].html
              : "Untitled"
          }}
        </div>
      </n-button>
    </template>
  </div>
</template>

<script>
// Vuex/services/mixins
import { mapGetters, mapState } from "vuex";
import domMixin from "@/mixins/domMixin";

// Components
import EditableBlock from "@/components/EditableBlock";
import nbutton from "@/components/NButton";

// Third party plugins

export default {
  mixins: [domMixin],
  components: {
    EditableBlock,
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
  computed: {
    ...mapGetters(["getBlocksByPageId", "getPageById", "getPageTitleById"]),
    blocks() {
      return this.getBlocksByPageId(this.page.id).sort(
        (a, b) => a.order - b.order
      );
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
    async addBlock(currentBlockEl, currentBlock) {
      // Current block is actually a DOM element

      const newBlock = {
        id: this.getNewId(),
        page: this.page.id,
        html: "",
        tag: "p",
        order: currentBlock.order + 0.01,
      };
      await this.$store.dispatch("addBlock", newBlock);

      setTimeout(() => {
        const nextElement = this.getNextSibling(currentBlockEl, ".block");
        nextElement.focus();
      }, 0);
    },
    async deleteBlock(currentBlockEl, currentBlock) {
      const previousElement = this.getPreviousSibling(currentBlockEl, ".block");

      if (previousElement) {
        this.setCaretToEnd(previousElement);
        previousElement.focus();

        await this.$store.dispatch("deleteBlock", currentBlock);
      }
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
  watch: {},
  provide() {
    return {};
  },
  inject: [],
};
</script>

<style lang="scss"></style>
