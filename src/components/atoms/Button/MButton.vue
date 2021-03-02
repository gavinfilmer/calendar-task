<template>
  <component
    :is="tag"
    :class="{
      [`${$attrs.class}`]: $attrs.class,
      // Base styles
      'm-button': !linkStyle,
      'm-button--primary':
        !(secondary || checked || add || pop || multipet) && !linkStyle,
      'm-button--pop': pop,
      'm-button--secondary': secondary,
      'm-button--multipet': multipet,
      'm-button--add': add,
      'm-button--added': added,
      'm-button--checked': checked,
      // Link Styles
      'm-button--underline': linkStyle === 'underline',
      'm-button--no-underline': linkStyle === 'no-underline',
      'm-button--external-link': linkStyle === 'external-link',
      'm-button--chevron': linkStyle && linkStyle.includes('chevron'),
      'm-button--chevron-left': linkStyle === 'chevron-left',
      'm-button--chevron-right': linkStyle === 'chevron-right',
      'm-button--chevron-up': linkStyle === 'chevron-up',
      'm-button--chevron-down': linkStyle === 'chevron-down',
      'm-button--edit': linkStyle === 'edit',
      // Size Styles
      'm-button--small': size === 'small',
      'm-button--micro': size === 'micro',
      'm-button--large': size === 'large',
      // Additional Styles
      'm-button--progress': loading,
      'm-button--dropdown': dropdown,
      'm-button--text-cta': textCta,
      'm-button--text-cta-responsive': textCta === 'responsive',
      'm-button--block': block,
      'm-button--block-mobile': block === 'mobile',
    }"
    :disabled="isDisabled || loading"
    v-bind="$attrs"
    v-on="enabledListeners"
  >
    <span v-if="iconLeft" class="m-button__icon m-button__icon--left"
      ><m-icon :icon="iconLeft"
    /></span>
    <slot />
    <span v-if="iconRight" class="m-button__icon m-button__icon--right"
      ><m-icon :icon="iconRight"
    /></span>
  </component>
</template>

<script>
import MIcon from '../Icon/MIcon'
export default {
  name: 'MButton',
  components: { MIcon },
  props: {
    /**
     * Deprecated. This prop used to be used for setting an href attribute on an anchor button, but the attributes are passed through to the component so this is not required.
     *
     * @deprecated
     */
    btnLink: {
      type: String,
      default: null,
    },
    /**
     * Deprecated. Attributes are passed through to the component we end up using so this prop is no longer required.
     *
     * @deprecated
     */
    modifier: {
      type: [String, Array],
      default: null,
    },
    /**
     * Tag for the component
     * eg. `a`, `button`, `router-link`, `nuxt-link`
     */
    tag: {
      type: String,
      default: 'button',
    },
    /**
     * Use secondary button style
     */
    secondary: {
      type: Boolean,
      default: false,
    },
    /**
     * Use multipet button style
     */
    multipet: {
      type: Boolean,
      default: false,
    },
    /**
     * Use checked button style
     */
    checked: {
      type: Boolean,
      default: false,
    },
    /**
     * Use add button style
     */
    add: {
      type: Boolean,
      default: false,
    },
    /**
     * Use add button added state
     */
    added: {
      type: Boolean,
      default: false,
    },
    /**
     * Use pop button style
     */
    pop: {
      type: Boolean,
      default: false,
    },
    /**
     * Change button link style
     */
    linkStyle: {
      type: String,
      default: null,
      validator: prop =>
        [
          'underline',
          'no-underline',
          'external-link',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'chevron-down',
          'edit',
        ].includes(prop),
    },
    /**
     * Change default size
     */
    size: {
      type: String,
      default: null,
      validator: prop => ['small', 'micro', 'large'].includes(prop),
    },
    /**
     * Use dropdown button style
     */
    dropdown: {
      type: Boolean,
      default: false,
    },
    /**
     * Dropdown is open
     */
    dropdownOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * Enable Disabled state
     */
    isDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Enable Loading state, adds loading animation
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Deprecated. Outer margin should really be a concern of the layouting parent and not the component itself.
     * Add a class with margin or add gap to the parent in the importing component instead.
     *
     * @deprecated
     */
    textCta: {
      type: [Boolean, String],
      default: null,
    },
    /**
     * Display at full width, optionally only on mobile
     */
    block: {
      type: [Boolean, String],
      default: null,
      validator: prop => [true, false, 'mobile'].includes(prop),
    },
  },
  computed: {
    enabledListeners() {
      const enabledListeners = { ...this.$listeners }
      // Button should not allow interactions, if it's in either disabled or loading state
      if (this.isDisabled || this.loading) {
        delete enabledListeners.click // Get rid of the click listeners, if button should be unclickable
      }

      return enabledListeners
    },
    iconLeft() {
      if (this.linkStyle === 'chevron-left') {
        return 'chevron-left'
      }

      return null
    },
    iconRight() {
      if (this.dropdown || this.linkStyle === 'chevron-down') {
        return this.dropdown && this.dropdownOpen
          ? 'chevron-up'
          : 'chevron-down'
      }

      if (
        this.linkStyle === 'chevron-up' ||
        this.linkStyle === 'chevron-right'
      ) {
        return this.linkStyle
      }

      if (this.checked) {
        return 'check'
      }

      if (this.linkStyle === 'edit') {
        return 'edit-2'
      }

      if (this.linkStyle === 'external-link') {
        return 'external-link'
      }

      if (this.add) {
        return this.added ? 'x' : 'plus'
      }

      return null
    },
  },
  mounted() {
    if (this.btnLink) {
      console.warn(
        'Migration reminder: prop "btn-link" has been removed, update component'
      )
    }
    if (this.textCta) {
      console.warn(
        'Migration reminder: prop "text-cta" has been removed, update component'
      )
    }
    if (this.modifier) {
      console.warn(
        'Migration reminder: prop "modifier" has been removed, update component'
      )
    }
  },
}
</script>

<style lang="scss">
@import '../../../sass/framework/framework.scss';

.m-button {
  @include button;
  text-align: center;

  &__icon {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
  }

  &--primary {
    @include button--primary;

    &.m-button--progress {
      @include button--progress;
      @include button--progress-white;
    }
  }

  &--pop {
    @include button--pop;

    &.m-button--progress {
      @include button--progress;
      @include button--progress-white;
    }
  }

  &--secondary {
    @include button--secondary;

    &.m-button--progress {
      @include button--progress;
    }
  }

  &--multipet {
    @include button--multipet;

    &.m-button--progress {
      @include button--progress;
      @include button--progress-white;
    }
  }

  &--checked {
    @include button--active;
  }

  &--add {
    @include button--secondary;
    position: relative;

    @include breakpoint(xxs-only) {
      border-radius: 50%;
      font-size: 0;
      height: 26px;
      min-height: 0;
      padding: 0;
      width: 26px;

      .m-button__icon {
        font-size: 1rem; // Don't shrink the icon
      }
    }

    // Active state on button--add
    // Not sure this is the best way,
    // don't like joining the classes
    &.m-button--added {
      @include button--active;
    }
  }

  &--chevron {
    @include button--override;
    @include button;
    @include button--chevron;
    padding: 0;

    &-right {
      @include button--chevron-right;
    }

    &-left {
      @include button--chevron-left;
    }
  }

  &--underline {
    @include button--override;

    // This style is applied to all text links as standard
    // in the typography stylesheet
    @include link;

    &.m-button--progress {
      @include button--progress;
    }
  }

  &--no-underline {
    @include button--override;

    // This removes the standard underline style on links that a
    // aren't deemed as "important" and the style isn't needed
    color: $color-link;
    cursor: pointer;
    text-decoration: none;
  }

  &--external-link {
    @include button--override;
    @include font-size('xs');
    color: $color-link;
    font-weight: $font-weight-semibold;
    text-decoration: none;

    &:hover {
      color: $color-link-hover;
    }
  }

  &--edit {
    @include button--override;
    @include font-size('xs');
    border: none;
    color: $color-sailor;
    padding: 0;
    text-decoration: none;

    &:hover {
      color: $color-sailor-hover;
    }
  }

  &--small {
    @include font-size('sm');
  }

  &--micro {
    @include font-size('xs');
  }

  &--large {
    padding: $pad-v-xs $pad-h-xxxxl;
  }

  &--block {
    display: block;
    width: 100%;

    &-mobile {
      @include breakpoint(xs-up) {
        display: inline-block;
        width: auto;
      }
    }
  }
}
</style>
