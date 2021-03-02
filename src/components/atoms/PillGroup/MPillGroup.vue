<template>
  <div
    class="m-pill-group"
    :class="{
      'm-pill-group--stretch': stretch,
      'm-pill-group--block': block,
      'm-pill-group--merged': merged,
    }"
  >
    <div
      v-for="option in options"
      :key="option.id"
      :class="{ 'm-pill-group__pill--checked': localValue === option.id }"
      class="m-pill-group__pill"
      :data-qa-locator="
        `radio-option${localId}-${
          option.qaLocator ? option.qaLocator : option.id
        }`
      "
    >
      <input
        :id="`radio-option${localId}-${option.id}`"
        v-model="localValue"
        class="m-pill-group__input"
        :value="option.id"
        v-bind="$attrs"
        type="radio"
      />
      <label
        :for="`radio-option${localId}-${option.id}`"
        class="m-pill-group__label"
        :data-qa-locator="
          `radio-option${localId}-${
            option.qaLocator ? option.qaLocator : option.id
          }-button`
        "
      >
        <span class="m-pill-group__tick">
          <m-icon icon="check" />
        </span>
        <span class="m-pill-group__text">
          {{ option.text }}
        </span>
      </label>
    </div>
  </div>
</template>
<script>
import MIcon from '../Icon/MIcon'
export default {
  name: 'MPillGroup',
  components: { MIcon },
  props: {
    options: {
      type: [Array],
      required: true,
    },
    value: {
      type: [Number, String, Boolean],
      default: null,
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    stretch: {
      type: Boolean,
      required: false,
      default: false,
    },
    merged: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
    localId() {
      return this.$attrs.name ? `-${this.$attrs.name}` : ''
    },
  },
}
</script>
<style lang="scss">
@import '../../../sass/framework/framework.scss';

$pill-group-border-radius: $border-radius-lg !default;
$pill-group-background: $color-white !default;
$pill-group-border-color: $color-grey-light !default;
$pill-group-box-shadow: $shadow-low !default;
$pill-group-font-weight: $font-weight-semibold !default;
$pill-group-font-size-mobile: $font-size-sm !default;
$pill-group-font-size-desktop: $font-size-sm !default;

$pill-group-border-color-hover: $color-eire !default;

$pill-group-background-checked: $color-sailor !default;
$pill-group-border-color-checked: $color-sailor !default;
$pill-group-color-checked: $color-white !default;

// Pill and button group | requires own pattern
.m-pill-group {
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  margin: (-$pad-v-xxs) (-$pad-h-xs);

  &__pill {
    background-color: $pill-group-background;
    border: 1px solid $pill-group-border-color;
    border-radius: $pill-group-border-radius;
    box-shadow: $pill-group-box-shadow;
    font-weight: $pill-group-font-weight;
    margin: $pad-v-xxs $pad-h-xs;
    transition: $animation-speed background-color ease-in-out,
      $animation-speed border-color ease-in-out,
      $animation-speed color ease-in-out;

    &:focus-within,
    &:hover {
      border: 1px solid $pill-group-border-color-hover;
    }

    &--checked {
      background-color: $pill-group-background-checked;
      border-color: $pill-group-border-color-checked;
      color: $pill-group-color-checked;
      transition: $animation-speed background-color ease-in-out,
        $animation-speed border-color ease-in-out,
        $animation-speed color ease-in-out;
    }
  }

  &__label {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: $pill-group-font-size-mobile;
    font-weight: $font-weight-regular;
    justify-content: center;
    min-height: 42px;
    padding-left: $pad-h-md * 1.5;
    padding-right: $pad-h-md * 1.5;
    width: auto;

    @include breakpoint(xxs-only) {
      padding-left: $pad-h-lg;
      padding-right: $pad-h-lg;
    }

    @include breakpoint(xs-up) {
      font-size: $pill-group-font-size-desktop;
    }
  }

  &__input {
    @include sr-only;
  }

  &__text {
    // Cancel out the text shift to the right caused by the check icon
    transform: translateX(calc((-1em - #{$pad-h-xs}) / 2));
    transition: transform $animation-speed-fast ease-in-out;

    .m-pill-group__pill--checked & {
      transform: none;
    }
  }

  &__tick {
    line-height: 1;
    margin-right: $pad-h-xs;
    opacity: 0;
    transform: scale(0.5);
    // Match the transition from checkbox input
    transition: transform $animation-speed-fast
        cubic-bezier(0.84, 0.05, 0.46, 1.78),
      opacity $animation-speed-fast ease-in-out;
    width: 1em;

    .m-pill-group__pill--checked & {
      opacity: 1;
      transform: none;
    }
  }

  &--stretch {
    .m-pill-group__pill {
      flex: 1;
    }
  }

  &--block {
    flex-direction: column;
  }

  &--merged {
    border-radius: $pill-group-border-radius;
    box-shadow: $pill-group-box-shadow;
    flex-wrap: nowrap;
    margin: 0;

    .m-pill-group__pill {
      border-radius: 0;
      box-shadow: none;
      flex: 1;
      margin: -1px;

      &:first-child {
        border-bottom-left-radius: $pill-group-border-radius;
        border-top-left-radius: $pill-group-border-radius;
      }

      &:last-child {
        border-bottom-right-radius: $pill-group-border-radius;
        border-top-right-radius: $pill-group-border-radius;
      }
    }

    // Merged block display
    &.m-pill-group--block {
      .m-pill-group__pill {
        border-radius: 0;

        &:first-child {
          border-top-left-radius: $pill-group-border-radius;
          border-top-right-radius: $pill-group-border-radius;
        }

        &:last-child {
          border-bottom-left-radius: $pill-group-border-radius;
          border-bottom-right-radius: $pill-group-border-radius;
        }
      }
    }
  }
}
</style>
