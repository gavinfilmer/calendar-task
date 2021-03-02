<template>
  <section class="media-queries-block">
    <div class="container padded-block">
      <div class="pad-example-block">
        <h2>xs</h2>
        <p><strong>5px</strong> gap.</p>
        <code>$pad-h-xs</code>
        <div class="padder-h padder-h--xs">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>sm</h2>
        <p><strong>10px</strong> gap.</p>
        <code>$pad-h-sm</code>
        <div class="padder-h padder-h--sm">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>md</h2>
        <p><strong>15px</strong> gap.</p>
        <code>$pad-h-md</code>
        <div class="padder-h padder-h--md">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>lg</h2>
        <p><strong>20px</strong> gap.</p>
        <code>$pad-h-lg</code>
        <div class="padder-h padder-h--lg">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>xl</h2>
        <p><strong>30px</strong> gap.</p>
        <code>$pad-h-xl</code>
        <div class="padder-h padder-h--xl">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>xxl</h2>
        <p><strong>40px</strong> gap.</p>
        <code>$pad-h-xxl</code>
        <div class="padder-h padder-h--xxl">
          <div></div>
        </div>
      </div>

      <hr />

      <div class="pad-example-block">
        <h2>Gutters</h2>
        <p>
          Gutters are based on the same vertical padding rules.
        </p>
        <p>
          <strong>Mobile</strong> : 10px<br />
          <strong>Tablet &amp; Desktop</strong> : 15px
        </p>
        <p>
          Coded responsively, please adjust browser window to see gutter size
          change
        </p>
        <div class="padder-h padder-h--gutter">
          <div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'padding-rules',
}
</script>

<style lang="scss">
@import '~@/sass/framework/framework';

// All classes used here for demonstration purpose only, not production code

.pad-example-block {
  margin-bottom: $pad-v-lg;

  > h2 {
    margin-bottom: $pad-v-xxs;
  }
}

.padder-h {
  background-color: $color-bounce;
  margin-top: $pad-v-sm;

  > div {
    background-color: $color-grey-light;
    height: $pad-v-sm;
  }

  &--xs {
    padding-left: $pad-h-xs;
  }

  &--sm {
    padding-left: $pad-h-sm;
  }

  &--md {
    padding-left: $pad-h-md;
  }

  &--lg {
    padding-left: $pad-h-lg;
  }

  &--xl {
    padding-left: $pad-h-xl;
  }

  &--xxl {
    padding-left: $pad-h-xxl;
  }

  &--gutter {
    padding-left: $gutter-sm;
    padding-right: $gutter-sm;

    @include breakpoint(sm-up) {
      padding-left: $gutter;
      padding-right: $gutter;
    }
  }
}
</style>
