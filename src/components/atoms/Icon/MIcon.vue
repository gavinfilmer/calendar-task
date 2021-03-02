<template>
  <span
    class="m-icon"
    :class="{
      [`m-icon--${size}`]: size,
    }"
    :title="title"
    :aria-hidden="!title"
  >
    <component :is="iconLoader" />
  </span>
</template>

<script>
import customIcons from './custom-icons'
export default {
  name: 'MIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    size: {
      type: String,
      required: false,
      default: undefined,
      validator: prop =>
        [
          'base',
          'xxs',
          'xs',
          'sm',
          'lg',
          'xl',
          'h1',
          'h2',
          'h3',
          'h4',
        ].includes(prop),
    },
  },
  computed: {
    iconLoader() {
      const icon = this.icon
      // If we have a custom icon, grab it from our assets folder
      // Otherwise grab from feather icons package
      // Annoyingly webpack does some magic with these import statements so we can't
      // be cleverer with the loaders and path, you just have to write them out in full, twice
      if (customIcons[icon]) {
        return () =>
          import(
            `!babel-loader!vue-svg-loader?{"svgo":{"plugins":[{"removeViewBox":false}]}}!../../../assets/icons/${icon}.svg`
          )
      } else {
        return () =>
          import(
            `!babel-loader!vue-svg-loader?{"svgo":{"plugins":[{"removeViewBox":false}]}}!feather-icons/dist/icons/${icon}.svg`
          )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../sass/framework/framework';

$icon-sizes: (
  xxs: $font-size-xxs,
  xs: $font-size-xs,
  sm: $font-size-sm,
  base: $font-size-base,
  lg: $font-size-lg,
  xl: $font-size-xl,
  h4: $font-size-h4,
  h3: $font-size-h3,
  h2: $font-size-h2,
  h1: $font-size-h1,
);

.m-icon {
  display: inline-block;
  height: 1em;
  line-height: 1;
  width: 1em;

  ::v-deep svg {
    display: block;
    height: 1em;
    width: 1em;
  }

  @each $size, $value in $icon-sizes {
    &--#{$size} {
      font-size: $value;
    }
  }
}
</style>
