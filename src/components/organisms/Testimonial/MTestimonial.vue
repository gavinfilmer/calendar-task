<template>
  <div :class="`container m-testimonial m-testimonial--img-${imagePosition}`">
    <div class="m-testimonial__image" :style="testimonialImageStyle" />
    <section
      :class="[
        `m-testimonial__content`,
        `m-testimonial__content--img-${imagePosition}`,
      ]"
    >
      <article class="m-testimonial__text">
        <h2 v-if="staff && title" class="m-testimonial__title">
          {{ title }}
        </h2>
        <h2 v-if="customer && lead" class="m-testimonial__lead">
          &ldquo;{{ lead }}&rdquo;
        </h2>
        <div class="m-testimonial__quote">
          <div v-html="text" />
        </div>
        <template>
          <div class="m-testimonial__author">
            <template v-if="staff && staffName">
              {{ staffName }}
            </template>
            <template v-if="customer && customerName">
              &ndash; {{ customerName }}
            </template>
          </div>
        </template>

        <template v-if="linkText && url">
          <m-button
            v-if="url && linkText"
            :href="url"
            :data-qa-locator="linkDataLocator"
            :target="linkTarget"
            :link-style="
              linkClasses === 'chevron-right' ? 'chevron-right' : null
            "
            :size="linkClasses !== 'primary' ? 'micro' : null"
            tag="a"
          >
            {{ linkText }}
          </m-button>
        </template>
      </article>
    </section>
  </div>
</template>

<script>
import MButton from '../../atoms/Button/MButton.vue'

export default {
  name: 'MTestimonial',
  components: {
    MButton,
  },
  props: {
    testimonialImage: {
      type: String,
      required: true,
    },
    imagePosition: {
      required: false,
      type: String,
      default() {
        return 'right'
      },
      validator: function(value) {
        return ['left', 'right'].indexOf(value) !== -1
      },
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    linkDataLocator: {
      type: String,
      default: 'testimonial-link',
    },
    lead: {
      type: String,
      required: false,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
    customerName: {
      type: String,
      required: false,
      default: null,
    },
    url: {
      type: String,
      required: false,
      default: null,
    },
    linkText: {
      type: String,
      required: false,
      default: null,
    },
    linkTarget: {
      type: String,
      required: false,
      default: null,
    },
    linkClasses: {
      type: String,
      required: false,
      default: 'chevron-right',
    },
    staff: {
      type: Boolean,
      required: false,
      default: null,
    },
    customer: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
  computed: {
    testimonialImageStyle() {
      return `background-image: url('${this.testimonialImage}')`
    },
    staffName() {
      let staffName = ''
      if (this.name) {
        staffName += this.name
        if (this.role) {
          staffName += `, ${this.role}`
        }
      }
      return staffName
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../sass/framework/framework.scss';

$testimonial-height-sm: 380px;
$testimonial-height: 446px;
$testimonial-max-width: $container-xl - 1;

.m-testimonial {
  display: flex;
  flex-direction: column;

  @media screen and (max-width: $testimonial-max-width) {
    // Override container width and padding to achieve fluid view on mobile
    max-width: 100vw;
    padding-left: 0;
    padding-right: 0;
  }

  @include breakpoint(md-up) {
    align-items: stretch;
  }

  @include breakpoint(xs-up) {
    &--img-left {
      flex-direction: row;
    }

    &--img-right {
      flex-direction: row-reverse;
    }
  }

  &__image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @include breakpoint(xxs-only) {
      height: 65vw;
    }

    @include breakpoint(xs-up) {
      flex-grow: 1;
    }

    @include breakpoint(lg-up) {
      height: auto;
    }
  }

  &__content {
    padding-bottom: 40px; // Outside of padding rules
    padding-top: 40px; // Outside of padding rules

    @include breakpoint(xxs-only) {
      margin-left: auto;
      // Align with container--xxs
      margin-right: auto;
      max-width: $container-xxs;
      padding-left: $gutter / 2;
      padding-right: $gutter / 2;
    }

    @include breakpoint(xs-up) {
      padding-bottom: $pad-v-xl;
      padding-top: $pad-v-xl;
    }

    @include breakpoint(sm-up) {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      padding-bottom: $pad-v-xxl;
      padding-top: $pad-v-xxl;
    }
  }

  &__image,
  &__content--img-right {
    .m-testimonial__text {
      @include breakpoint(sm-up) {
        padding-left: $gutter-sm;
      }
    }

    @include breakpoint(xs-up) {
      flex: 1;
      // Add gutter to padding to keep consistent width between both text and image areas
      padding-right: $gutter;
    }

    @include breakpoint(sm-up) {
      min-height: $testimonial-height-sm;
    }

    @include breakpoint(lg-up) {
      min-height: $testimonial-height;
    }

    // Add padding-left to fluid width views,
    // to align text to grid with image running to edge of screen
    @include breakpoint(xs-only) {
      padding-left: calc((100vw - #{$container-xs - $gutter}) / 2);
    }

    @include breakpoint(sm-only) {
      // Not sure why this particular calc doesn't need the gutter factored in!?
      padding-left: calc((100vw - #{$container-sm}) / 2);
    }

    @include breakpoint(md-only) {
      padding-left: calc((100vw - #{$container-md - $gutter}) / 2);
    }

    @media screen and (min-width: $screen-lg) and (max-width: $testimonial-max-width) {
      // Unique breakpoint between md size and max width variable
      padding-left: calc((100vw - #{$screen-md - $gutter}) / 2);
    }

    @media screen and (min-width: $testimonial-max-width + 1) {
      .m-testimonial__text {
        padding-left: 0;
      }
    }
  }

  &__content--img-left {
    .m-testimonial__text {
      @include breakpoint(sm-up) {
        padding-right: $gutter-sm;
      }
    }
    @include breakpoint(xs-up) {
      flex: 1;
      // Add gutter to padding to keep consistent width between both text and image areas
      padding-left: $gutter;
    }

    @include breakpoint(sm-up) {
      min-height: $testimonial-height-sm;
    }

    @include breakpoint(lg-up) {
      min-height: $testimonial-height;
    }

    // Add padding-right to fluid width views,
    // to align text to grid with image running to edge of screen
    @include breakpoint(xs-only) {
      padding-right: calc((100vw - #{$container-xs - $gutter}) / 2);
    }

    @include breakpoint(sm-only) {
      // Not sure why this particular calc doesn't need the gutter factored in!?
      padding-right: calc((100vw - #{$container-sm}) / 2);
    }

    @include breakpoint(md-only) {
      padding-right: calc((100vw - #{$container-md - $gutter}) / 2);
    }

    @media screen and (min-width: $screen-lg) and (max-width: $testimonial-max-width) {
      // Unique breakpoint between md size and max width variable
      padding-right: calc((100vw - #{$screen-md - $gutter}) / 2);
    }

    @media screen and (min-width: $testimonial-max-width + 1) {
      .m-testimonial__text {
        padding-right: 0;
      }
    }
  }

  &__text {
    width: 100%;

    @include breakpoint(md-up) {
      padding: $pad-v-xl ($pad-h-xl * 2);
    }
  }

  &__quote {
    @include font-size('sm');
    margin-bottom: $pad-v-sm;
  }

  &__author {
    @include font-size('xs');
    font-weight: $font-weight-bold;
    margin-bottom: $pad-v-md;
  }
}
</style>
