<template functional>
  <div
    class="m-spacing"
    :class="{
      [`m-spacing--top-${props.top}`]: props.top !== '',
      [`m-spacing--right-${props.right}`]: props.right !== '',
      [`m-spacing--bottom-${props.bottom}`]: props.bottom !== '',
      [`m-spacing--left-${props.left}`]: props.left !== '',
      'm-spacing--inline': props.inline,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'm-spacing',
  props: {
    top: {
      type: String,
      required: false,
      default: '',
    },
    right: {
      type: String,
      required: false,
      default: '',
    },
    bottom: {
      type: String,
      required: false,
      default: '',
    },
    left: {
      type: String,
      required: false,
      default: '',
    },
    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../sass/framework/framework.scss';
$spacing-vertical: (
  xxxs: $pad-v-xxxs,
  xxs: $pad-v-xxs,
  xs: $pad-v-xs,
  sm: $pad-v-sm,
  md: $pad-v-md,
  lg: $pad-v-lg,
  xl: $pad-v-xl,
  xxl: $pad-v-xxl,
  xxxl: $pad-v-xxxl,
);

$spacing-horizontal: (
  xs: $pad-h-xs,
  sm: $pad-h-sm,
  md: $pad-h-md,
  lg: $pad-h-lg,
  xl: $pad-h-xl,
  xxl: $pad-h-xxl,
  xxxl: $pad-h-xxxl,
  xxxxl: $pad-h-xxxxl,
);

.m-spacing {
  &--top {
    @each $key, $value in $spacing-vertical {
      &-#{$key} {
        margin-top: $value;
      }
    }
  }

  &--right {
    @each $key, $value in $spacing-horizontal {
      &-#{$key} {
        margin-right: $value;
      }
    }
  }

  &--bottom {
    @each $key, $value in $spacing-vertical {
      &-#{$key} {
        margin-bottom: $value;
      }
    }
  }

  &--left {
    @each $key, $value in $spacing-horizontal {
      &-#{$key} {
        margin-left: $value;
      }
    }
  }

  &--inline {
    display: inline;
  }
}
</style>
