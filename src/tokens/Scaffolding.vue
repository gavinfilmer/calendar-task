<template>
  <section class="media-queries-block">
    <div class="container padded-block">
      <table>
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th><code>*-down</code></th>
            <th><code>*-only</code></th>
            <th><code>*-up</code></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title title--xxs"><code>xxs</code></td>
            <td class="accent unavailable">Unavailable</td>
            <td class="accent--xxs-only">xxs-only</td>
            <td class="accent unavailable">Unavailable</td>
          </tr>
          <tr>
            <td class="title title--xs"><code>xs</code></td>
            <td class="accent--xs-down">xs-down</td>
            <td class="accent--xs-only">xs-only</td>
            <td class="accent--xs-up">xs-up</td>
          </tr>
          <tr>
            <td class="title title--sm"><code>sm</code></td>
            <td class="accent--sm-down">sm-down</td>
            <td class="accent--sm-only">sm-only</td>
            <td class="accent--sm-up">sm-up</td>
          </tr>
          <tr>
            <td class="title title--md"><code>md</code></td>
            <td class="accent--md-down">md-down</td>
            <td class="accent--md-only">md-only</td>
            <td class="accent--md-up">md-up</td>
          </tr>
          <tr>
            <td class="title title--lg"><code>lg</code></td>
            <td class="accent--lg-down">lg-down</td>
            <td class="accent--lg-only">lg-only</td>
            <td class="accent--lg-up">lg-up</td>
          </tr>
          <tr>
            <td class="title title--xl"><code>xl</code></td>
            <td class="accent unavailable">Unavailable</td>
            <td class="accent--xl-only">xl-only</td>
            <td class="accent unavailable">Unavailable</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~@/sass/framework/framework';

// Styles only needed for reference in the story, not in production code
.media-queries-block {
  & table {
    width: 100%;

    & td {
      background: $color-sailor;
      color: $color-white;
      height: 2rem;
      padding: 1rem;
      text-align: center;
      width: 25%;

      &.title {
        background: $color-grey-mid-light;

        &--xxs {
          @include breakpoint(xxs-only) {
            background: $color-grey-mid;
          }
        }

        &--xs {
          @include breakpoint(xs-only) {
            background: $color-grey-mid;
          }
        }

        &--sm {
          @include breakpoint(sm-only) {
            background: $color-grey-mid;
          }
        }

        &--md {
          @include breakpoint(md-only) {
            background: $color-grey-mid;
          }
        }

        &--lg {
          @include breakpoint(lg-only) {
            background: $color-grey-mid;
          }
        }

        &--xl {
          @include breakpoint(xl-only) {
            background: $color-grey-mid;
          }
        }
      }

      @include breakpoint(xxs-only) {
        font-size: 80%;
        padding: 0.5rem;
      }
    }
  }

  .accent {
    &--xxs {
      &-only {
        @include breakpoint(xxs-only) {
          background: $color-bounce;
        }
      }
    }

    &--xs {
      &-down {
        @include breakpoint(xs-down) {
          background: $color-bounce;
        }
      }

      &-only {
        @include breakpoint(xs-only) {
          background: $color-bounce;
        }
      }

      &-up {
        @include breakpoint(xs-up) {
          background: $color-bounce;
        }
      }
    }

    &--sm {
      &-down {
        @include breakpoint(sm-down) {
          background: $color-bounce;
        }
      }

      &-only {
        @include breakpoint(sm-only) {
          background: $color-bounce;
        }
      }

      &-up {
        @include breakpoint(sm-up) {
          background: $color-bounce;
        }
      }
    }

    &--md {
      &-down {
        @include breakpoint(md-down) {
          background: $color-bounce;
        }
      }

      &-only {
        @include breakpoint(md-only) {
          background: $color-bounce;
        }
      }

      &-up {
        @include breakpoint(md-up) {
          background: $color-bounce;
        }
      }
    }

    &--lg {
      &-down {
        @include breakpoint(lg-down) {
          background: $color-bounce;
        }
      }

      &-only {
        @include breakpoint(lg-only) {
          background: $color-bounce;
        }
      }

      &-up {
        @include breakpoint(lg-up) {
          background: $color-bounce;
        }
      }
    }

    &--xl {
      &-only {
        @include breakpoint(xl-only) {
          background: $color-bounce;
        }
      }
    }
  }

  .unavailable {
    background: $color-barely;
    color: $color-text;
  }
}
</style>
