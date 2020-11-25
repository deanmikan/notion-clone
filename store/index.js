import Vue from "vue";

import defaultState from "./defaultState";

export default {
  state: {
    pages: [],
    blocks: [],
  },
  mutations: {
    SET_STATE(state, { key, value }) {
      state[key] = value;
    },
    ADD_PAGE(state, page) {
      state.pages.push(page);
    },
    EDIT_PAGE(state, page) {
      var oldPage = state.pages.findIndex((p) => p.id == page.id);
      Vue.set(state.pages, oldPage, page);
    },
    ADD_BLOCK(state, block) {
      state.blocks.push(block);
    },
    EDIT_BLOCK(state, block) {
      var oldBlock = state.blocks.findIndex((b) => b.id == block.id);
      Vue.set(state.blocks, oldBlock, block);
    },
    DELETE_BLOCK(state, block) {
      state.blocks.splice(
        state.blocks.findIndex((b) => b.id == block.id),
        1
      );
    },
  },
  actions: {
    init({ commit }) {
      commit("SET_STATE", { key: "pages", value: defaultState.pages });
      commit("SET_STATE", { key: "blocks", value: defaultState.blocks });
    },
    editBlock({ commit }, block) {
      commit("EDIT_BLOCK", block);
    },
    addBlock({ commit }, block) {
      commit("ADD_BLOCK", block);
    },
    deleteBlock({ commit }, block) {
      commit("DELETE_BLOCK", block);
    },
    addPage({ commit }, page) {
      commit("ADD_PAGE", page);
    },
  },
  getters: {
    getBlocksByPageId: (state) => (id) =>
      state.blocks.filter((b) => b.page == id),
    getPageById: (state) => (id) => state.pages.find((p) => p.id == id),
    getPageTitleById: (state, getters) => (id) => {
      const firstBlock = state.blocks.filter((b) => b.page == id)[0];

      if (!firstBlock) {
        return "Untitled";
      }
      return `${getters.getPageById(id).emoji || ""} ${
        firstBlock.html || "Untitled"
      }`;
    },
    getPages: (state) => state.pages,
  },
};
