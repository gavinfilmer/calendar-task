// We need this to use vue-svg-loader with jest
// https://vue-svg-loader.js.org/faq.html#how-to-use-this-loader-with-jest
const vueJest = require('vue-jest/lib/template-compiler')

module.exports = {
  process(content) {
    const { render } = vueJest({
      content,
      attrs: {
        functional: false,
      },
    })

    return `module.exports = { render: ${render} }`
  },
}
