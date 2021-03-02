<template>
  <footer
    class="price-footer"
    :class="{
      'price-footer--fixed': fixed,
      'price-footer--hidden': !visible,
      'price-footer--full-width-button': fullWidthButton,
    }"
  >
    <div v-if="$slots.promotionalBanner" class="price-footer__promo">
      <div class="container">
        <div class="price-footer__promo-content">
          <slot name="promotionalBanner"></slot>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="price-footer__content"
        :class="{
          'price-footer__content--narrow': narrowContainer,
        }"
      >
        <div class="price-footer__info">
          <span v-if="pricePrefixText" class="price-footer__monthly">{{
            pricePrefixText
          }}</span>
          <transition group mode="out-in" name="scale-fade">
            <div
              :key="priceMonthly"
              class="price-footer__monthly-message"
              style="display: inline-block"
            >
              <span
                class="price-footer__monthly-price"
                data-qa-locator="price-footer-monthly-price"
                >{{ priceMonthly }}</span
              >
              {{ priceMonthlySuffix }}
            </div>
          </transition>
          <div class="price-footer__bottom-message">
            <slot name="bottomChargeText" :priceYearly="priceYearly">
              No extra charge for paying monthly ({{ priceYearly }}
              per year)
            </slot>
            <div
              v-if="$slots['footerExtraText']"
              class="price-footer__extra-text"
            >
              <slot name="footerExtraText"></slot>
            </div>
          </div>
        </div>

        <div class="price-footer__cta">
          <m-button
            pop
            block
            data-qa-locator="price-footer-cta-button"
            @click="onClick"
          >
            {{ buttonText }}
          </m-button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MButton from '../../atoms/Button/MButton'

export default {
  name: 'MPriceFooter',
  components: { MButton },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    narrowContainer: {
      type: Boolean,
      default: false,
    },
    priceMonthly: {
      type: String,
      default: null,
      required: true,
    },
    priceMonthlySuffix: {
      type: String,
      default: 'mo',
    },
    priceYearly: {
      type: String,
      default: null,
    },
    buttonText: {
      type: String,
      default: 'Continue',
    },
    fullWidthButton: {
      type: Boolean,
      default: false,
    },
    pricePrefixText: {
      type: String,
      default: 'Total: ',
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../sass/framework/framework.scss';

$price-footer-background: $color-sailor !default;
$price-footer-color: $color-white !default;

.price-footer {
  background-color: $price-footer-background;
  color: $price-footer-color;
  transition: 0.25s all ease-out;
  width: 100%;
  z-index: 10;

  &--fixed {
    bottom: 0;
    position: sticky;
  }

  &--hidden {
    display: none;
  }

  .price-footer__promo {
    background-color: $color-happy;
    color: $color-sailor;

    &-content {
      align-items: baseline;
      color: $color-sailor;
      display: flex;
      font-size: $font-size-sm;
      font-weight: $font-weight-bold;
      justify-content: center;
      padding: $pad-v-xs 0;

      a {
        @include link;
        color: $color-sailor;
      }
    }
  }

  @include breakpoint(xs-down) {
    &--full-width-button {
      .price-footer__content {
        flex-wrap: wrap;

        .price-footer__cta {
          width: 100%;

          .m-button {
            margin-top: 20px;
            min-width: 100%;
          }
        }
      }
    }
  }

  &__content {
    padding-bottom: $pad-v-xxxs;
    padding-top: $pad-v-xxxs;
    transition: 0.25s all ease-out;

    @media screen and (min-width: $screen-xs) {
      display: flex;
    }

    &--narrow {
      margin-left: auto;
      margin-right: auto;

      .price-footer__bottom-message {
        max-width: 400px;
      }

      @media screen and (min-width: $screen-xs) {
        max-width: $container-xs;
      }
    }
    @media screen and (max-width: $screen-xxs-max) {
      display: block;
      padding-bottom: $pad-v-xs;
    }
  }

  &__info {
    @include font-size(xs);
    flex: none;
    font-weight: $font-weight-regular;
    padding-bottom: $pad-v-xs;
    width: 100%;
    @media screen and (min-width: $screen-xs) {
      flex: none;
      width: 50%;
    }
  }

  &__monthly-message {
    transform-origin: left bottom;
  }

  &__monthly {
    font-weight: $font-weight-semibold;
  }

  .price-footer__monthly {
    font-size: $font-size-xl;
    &-price {
      font-size: $font-size-h2;
    }
  }

  &__cta {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    @media screen and (min-width: $screen-xs) {
      flex: none;
      width: 50%;
    }
    .m-button {
      @media screen and (min-width: $screen-xs) {
        max-width: 323px;
      }
    }
  }

  &__bottom-message {
    @include font-size(xs);
    display: block;
    margin-bottom: 5px;

    a {
      @include link--on-dark;
    }
  }

  &__extra-text {
    margin-top: $pad-v-xxxs;
  }
}

.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: opacity 0.2s 0.1s ease-in-out, transform 0.3s ease-in-out;
}
.scale-fade-enter,
.scale-fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
