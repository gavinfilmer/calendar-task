<template>
  <div class="container padded-block">
    <section class="visibility-block">
      <table>
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th>Hidden</th>
            <th>Visible</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="title title--xxs"><code>xxs</code></td>
            <td>
              <div class="hidden-xxs">hidden-xxs</div>
            </td>
            <td>
              <div class="visible-xxs">visible-xxs</div>
            </td>
          </tr>
          <tr>
            <td class="title title--xs"><code>xs</code></td>
            <td>
              <div class="hidden-xs">hidden-xs</div>
            </td>
            <td>
              <div class="visible-xs">visible-xs</div>
            </td>
          </tr>
          <tr>
            <td class="title title--sm"><code>sm</code></td>
            <td>
              <div class="hidden-sm">hidden-sm</div>
            </td>
            <td>
              <div class="visible-sm">visible-sm</div>
            </td>
          </tr>
          <tr>
            <td class="title title--md"><code>md</code></td>
            <td>
              <div class="hidden-md">hidden-md</div>
            </td>
            <td>
              <div class="visible-md">visible-md</div>
            </td>
          </tr>
          <tr>
            <td class="title title--lg"><code>lg</code></td>
            <td>
              <div class="hidden-lg">hidden-lg</div>
            </td>
            <td>
              <div class="visible-lg">visible-lg</div>
            </td>
          </tr>
          <tr>
            <td class="title title--xl"><code>xl</code></td>
            <td>
              <div class="hidden-xl">hidden-xl</div>
            </td>
            <td>
              <div class="visible-xl">visible-xl</div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~@/sass/framework/framework';

// Styles only needed for reference in the story, not in production code
.visibility-block {
  & table {
    width: 100%;

    & td {
      background: $color-sailor;
      color: $color-white;
      height: 2rem;
      text-align: center;
      width: 25%;

      & > div {
        padding: 1rem;

        @include breakpoint(xxs-only) {
          font-size: 80%;
          padding: 0.5rem;
        }
      }

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
    }
  }

  .visible {
    &-xxs {
      @include breakpoint(xxs-only) {
        background: $color-bounce;
      }
    }

    &-xs {
      @include breakpoint(xs-only) {
        background: $color-bounce;
      }
    }

    &-sm {
      @include breakpoint(sm-only) {
        background: $color-bounce;
      }
    }

    &-md {
      @include breakpoint(md-only) {
        background: $color-bounce;
      }
    }

    &-lg {
      @include breakpoint(lg-only) {
        background: $color-bounce;
      }
    }

    &-xl {
      @include breakpoint(xl-only) {
        background: $color-bounce;
      }
    }
  }
}
</style>
