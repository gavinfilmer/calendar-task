<template>
  <component :is="tag" v-if="linebreak" class="m-heading-one">
    <span
      v-for="paragraph in paragraphs"
      :key="paragraph"
      class="m-heading-one--line"
      :class="[{ 'm-heading-one--title-dot': addedDot }]"
      v-html="paragraph"
    />
  </component>
  <component
    :is="tag"
    v-else
    class="m-heading-one"
    :class="[{ 'm-heading-one--title-dot': addedDot }]"
    v-html="parsedHeading"
  />
</template>

<script>
export default {
  name: 'MHeadingOne',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h1',
    },
    heading: {
      type: String,
      required: false,
      default: 'Bought By Many',
    },
    addedDot: {
      type: Boolean,
      required: false,
      default: true,
    },
    linebreak: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    parsedHeading() {
      const parsedDot = this.heading.endsWith('.') && this.addedDot
      return parsedDot ? this.heading.slice(0, -1) : this.heading
    },
    paragraphs() {
      /* Split at full stop to create array for multi-paragraph headlines */
      return this.heading
        .split('. ')
        .map(h => h.replace('.', ''))
        .map(h => (!this.addedDot ? h + '.' : h))
    },
  },
}
</script>

<style lang="scss">
@import '../../../sass/framework/framework.scss';

.m-heading-one {
  &--title-dot {
    @include title-dot;
  }
  &--line {
    display: block;
  }
}
</style>
