export default {
  methods: {
    /**
     * Utility to translate strings using namespaced locale key
     *    "patterns.<component name>.<key>"
     *  e.g.
     *    "patterns.MPaymentCard.expires"
     *
     * @param {string} key the locale key to lookup
     * @param {string} fallbackStr the text to fallback to if i18n unavailable
     * @returns {string} the localised or passed in string
     */
    i18n(key, fallbackStr) {
      return this.$t
        ? this.$t(`patterns.${this.$options.name}.${key}`)
        : fallbackStr
    },
  },
}
