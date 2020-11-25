export default {
  methods: {
    getNextSibling(elem, selector) {
      // Get the next sibling element
      var sibling = elem.nextElementSibling;

      // If there's no selector, return the first sibling
      if (!selector) return sibling;

      // If the sibling matches our selector, use it
      // If not, jump to the next sibling and continue the loop
      while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.nextElementSibling;
      }
    },
    getPreviousSibling(elem, selector) {
      // Get the next sibling element
      var sibling = elem.previousElementSibling;

      // If there's no selector, return the first sibling
      if (!selector) return sibling;

      // If the sibling matches our selector, use it
      // If not, jump to the next sibling and continue the loop
      while (sibling) {
        if (sibling.matches(selector)) return sibling;
        sibling = sibling.previousElementSibling;
      }
    },
  },
};
