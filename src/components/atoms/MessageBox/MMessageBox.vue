<template>
  <div class="message-box" role="status">
    <div
      :class="`message-box__container ${alertTypeClass}`"
      :data-qa-locator="dataQaLocator"
    >
      <div class="message-box__icon"></div>
      <div class="message-box__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MMessageBox',
  props: {
    alertType: {
      type: String,
      required: false,
      default: 'info',
      validator(val) {
        return ['', 'info', 'warning', 'error'].includes(val)
      },
    },
    dataQaLocator: {
      type: String,
      default: null,
    },
  },
  computed: {
    alertTypeClass() {
      return this.alertType
        ? `message-box__container--${this.alertType}`
        : 'message-box__container--info'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../sass/framework/framework.scss';

.message-box {
  color: $color-sailor;
  display: inline-block;

  &__container {
    align-items: center;
    display: flex;
    padding: 15px;

    &--info {
      background-color: $color-barely;
    }
    &--warning {
      background-color: $color-rarely;
    }
    &--error {
      background-color: $color-fairly;
    }

    // helps center a message from prismic if only 1 element
    /* stylelint-disable-next-line selector-pseudo-element-no-unknown */
    ::v-deep p:last-of-type {
      margin-bottom: 0;
    }
  }

  &__content {
    @include font-size('sm');
    margin: 0 10px;
  }

  &__icon {
    background-image: url('#{$patterns-asset-path}/svg/exclamation-circle.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 10px;
    min-height: 30px;
    min-width: 30px;
  }
}
</style>
