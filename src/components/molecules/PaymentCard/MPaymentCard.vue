<template>
  <div
    class="m-payment-card"
    :class="{
      'm-payment-card--expired': expired,
      [`m-payment-card--${brand}`]: brand,
      [`m-payment-card--${color}`]: color,
      [`m-payment-card--${fundingType}`]: fundingType,
    }"
  >
    <div class="m-payment-card__inner">
      <div class="m-payment-card__elements">
        <span
          data-qa-locator="payment-card-card-type"
          class="m-payment-card__description"
        >
          {{ brand }} {{ fundingType }}
        </span>
        <span v-if="!expired" class="m-payment-card__chip"></span>
        <span v-if="expired" class="m-payment-card__warning">
          {{ i18n('card_expired', 'Card expired') }}
        </span>
        <div class="m-payment-card__number">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 32"
            height="32"
            width="100"
          >
            <text x="0" y="32" text-anchor="start">
              * * * *
            </text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 32"
            height="32"
            width="100"
          >
            <text x="50%" y="32" text-anchor="middle">
              * * * *
            </text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 32"
            height="32"
            width="100"
          >
            <text x="50%" y="32" text-anchor="middle">
              * * * *
            </text>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 32"
            data-qa-locator="payment-card-digits"
            height="32"
            width="100"
          >
            <text
              x="50%"
              :y="truncatedPanVerticalPosition"
              text-anchor="middle"
            >
              {{ formattedTruncatedPan }}
            </text>
          </svg>
        </div>
        <span
          data-qa-locator="payment-card-expiry-date"
          class="m-payment-card__expiry"
        >
          <template v-if="expiryText">
            {{ expiryText }} {{ expiryDate }}
          </template>
          <template v-else>
            {{ i18n('expires', 'Expires') }} {{ expiryDate }}
          </template>
        </span>
        <span v-if="cardholder" class="m-payment-card__cardholder">
          {{ cardholder }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import i18nMixin from '../../../mixins/i18n'

const colorOptions = ['color-bounce', 'color-frances', 'color-happy']

export default {
  name: 'MPaymentCard',
  mixins: [i18nMixin],
  props: {
    brand: {
      type: String,
      default: '',
    },
    fundingType: {
      type: String,
      default: '',
    },
    truncatedPan: {
      type: [String, Number],
      default: '****',
    },
    cardholder: {
      type: String,
      default: '',
    },
    expired: {
      default: false,
      type: Boolean,
    },
    expiryText: {
      default: '',
      type: String,
    },
    expiryMonth: {
      type: [String, Number],
      default: 'xx',
    },
    expiryYear: {
      type: [String, Number],
      default: 'xx',
    },
    color: {
      type: String,
      default: null,
      validator: color => colorOptions.includes(color),
    },
  },
  computed: {
    formattedTruncatedPan() {
      return `${this.truncatedPan}`.split('').join(' ')
    },
    expiryDate() {
      return `${this.formattedExpiryMonth}/${this.formattedExpiryYear}`
    },
    formattedExpiryMonth() {
      const expiryMonth = `${this.expiryMonth}`
      return expiryMonth.length === 1 ? `0${expiryMonth}` : expiryMonth
    },
    formattedExpiryYear() {
      const expiryYear = `${this.expiryYear}`
      return expiryYear.length > 2 ? expiryYear.substring(2) : expiryYear
    },
    truncatedPanVerticalPosition() {
      return this.truncatedPan === '****' ? 32 : 25
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../sass/framework/framework.scss';

// Card colours
$card-bg-default: #f4f3f3;
$card-text-default: #304858;

// Use card dimentions from ISO/IEC 7810
$cardIsoWidth: 85.6;
$cardIsoHeight: 53.98;

.m-payment-card {
  background-color: $card-bg-default;
  border-radius: $border-radius-sm;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.1);
  color: $card-text-default;
  font-weight: $font-weight-semibold;
  margin: 0 auto 5px;
  position: relative;
  text-align: left;

  &--color-frances {
    background-color: $color-frances;
    color: $color-white;
  }

  &--color-bounce {
    background-color: $color-bounce;
    color: $color-white;
  }

  &--color-happy {
    background-color: $color-happy;
    color: $color-sailor;
  }

  text {
    fill: currentColor;
  }

  &__inner {
    // Force the card to be the correct aspect ratio
    //  The 'inner' element is required as the percentage padding is based on the
    //  container's width.
    @include aspect-ratio($cardIsoWidth, $cardIsoHeight);
  }

  &__elements {
    bottom: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 10%;
    position: absolute;
    right: 10%;
    top: 15%;
  }

  &__chip {
    background-image: url('#{$patterns-asset-path}/svg/card-chip.svg');
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 0.5em;
    width: 15%;

    // This psedo-element forces the chip to be the correct
    //  aspect ratio
    &::before {
      @include aspect-ratio($cardIsoWidth, $cardIsoHeight);
      content: '';
      display: block;
    }
  }

  &--expired {
    background-color: $card-bg-default;
    color: $card-text-default;
  }

  &__description {
    @include font-size(sm);
    letter-spacing: 0.2px;
    min-height: $line-height-sm; // ensure the space is occuiped even if empty to push other elements down
    text-align: right;
    text-transform: capitalize;
  }

  &__warning {
    font-size: 30px;
    letter-spacing: 0.3px;
  }

  &__number {
    display: flex;
    justify-content: space-between;

    > svg {
      font-size: 32px;
      overflow: visible; // ensure the nuumber isn;t clipped by a pixel
      width: 20%;
    }
  }

  &__expiry {
    @include font-size(xs);
    display: block;
    letter-spacing: 0.2px;

    @media (min-width: $screen-xxs) {
      font-size: $font-size-sm;
    }

    @media (min-width: $screen-xs) {
      font-size: $font-size-xs;
    }

    @media (min-width: $screen-sm) {
      font-size: $font-size-sm;
    }
  }

  &__cardholder {
    @include font-size(xxs);
    display: block;
    letter-spacing: 0.75px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;

    @media (min-width: $screen-xxs) {
      font-size: $font-size-xs;
      letter-spacing: 0.1px;
    }

    @media (min-width: $screen-xs) {
      font-size: $font-size-xxs;
      letter-spacing: 0.75px;
    }

    @media (min-width: $screen-sm) {
      font-size: $font-size-xs;
      letter-spacing: 0.1px;
    }
  }
}
</style>
