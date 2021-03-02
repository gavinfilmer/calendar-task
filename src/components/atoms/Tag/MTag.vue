<template>
  <div class="m-tag" :class="`m-tag--${tagStyle}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MTag',
  props: {
    tagStyle: {
      type: String,
      required: false,
      default: 'color-happy',
    },
  },
}
</script>

<style lang="scss">
@import '../../../sass/framework/framework.scss';

.m-tag {
  @include font-size('xs');
  display: inline-block;
  font-weight: $font-weight-semibold;
  padding: ($pad-v-xxxs / 2) $pad-h-sm;

  &--color-happy {
    background-color: $color-happy;
  }

  &--color-clay-light {
    background-color: $color-clay-light;
  }

  &--color-clay-dark {
    background-color: $color-clay-dark;
  }

  &--color-grey-green {
    background-color: $color-grey-green;
  }

  &--color-cheeky {
    background-color: $color-cheeky;
    color: white;
  }

  &--color-sailor {
    background-color: $color-sailor;
    color: white;
  }

  &--color-loyal {
    background-color: $color-loyal;
    color: white;
  }

  &--color-frances {
    background-color: $color-frances;
    color: white;
  }
}
</style>
