<template>
  <section class="media-queries-block">
    <div class="container padded-block">
      <div class="pad-example-block">
        <h2>xxxs</h2>
        <p>
          <strong>4px</strong> (Gap between similar text objects, e.g. bullet
          points)
        </p>
        <code>$pad-v-xxxs</code>
        <div class="padder-v padder-v--xxxs">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>xxs</h2>
        <p>
          <strong>8px</strong> (Gap between text objects to differentiate
          hierarchy - e.g. paragraph header &amp; description on cards)
        </p>
        <code>$pad-v-xxs</code>
        <div class="padder-v padder-v--xxs">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>xs</h2>
        <p>
          <strong>12px</strong> (Gap between objects in a component - e,g.
          title, horizontal line, thumbnail)
        </p>
        <code>$pad-v-xs</code>
        <div class="padder-v padder-v--xs">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>sm</h2>
        <p><strong>16px</strong> (Gap between headers and body)</p>
        <code>$pad-v-sm</code>
        <div class="padder-v padder-v--sm">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>md</h2>
        <p>
          <strong>24/32px</strong> (Gap between components - e.g. cards, Cards’
          Inner top/bottom padding)
        </p>
        <code>$pad-v-md</code>
        <div class="padder-v padder-v--md">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>lg</h2>
        <p>
          <strong>24/32px</strong> (Gap between components - e.g. cards, Cards’
          Inner top/bottom padding)
        </p>
        <code>$pad-v-lg</code>
        <div class="padder-v padder-v--lg">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>xl</h2>
        <p><strong>48px</strong> (Gap separating CTA from content)</p>
        <code>$pad-v-xl</code>
        <div class="padder-v padder-v--xl">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>xxl</h2>
        <p>
          Desktop : 80px, <strong>Mobile : 60px</strong> (Section Inner
          top/bottom padding)
        </p>
        <code>$pad-v-xxl</code>
        <div class="padder-v padder-v--xxl">
          <div></div>
        </div>
      </div>

      <div class="pad-example-block">
        <h2>xxxl</h2>
        <p>
          <strong>Desktop : 80px</strong>, Mobile : 60px (Section Inner
          top/bottom padding)
        </p>
        <code>$pad-v-xxxl</code>
        <div class="padder-v padder-v--xxxl">
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

.padder-v {
  background-color: $color-bounce;
  margin-top: $pad-v-sm;

  > div {
    background-color: $color-grey-light;
    height: $pad-v-sm;
  }

  &--xxxs {
    padding-bottom: $pad-v-xxxs;
  }

  &--xxs {
    padding-bottom: $pad-v-xxs;
  }

  &--xs {
    padding-bottom: $pad-v-xs;
  }

  &--sm {
    padding-bottom: $pad-v-sm;
  }

  &--md {
    padding-bottom: $pad-v-md;
  }

  &--lg {
    padding-bottom: $pad-v-lg;
  }

  &--xl {
    padding-bottom: $pad-v-xl;
  }

  &--xxl {
    padding-bottom: $pad-v-xxl;
  }

  &--xxxl {
    padding-bottom: $pad-v-xxxl;
  }
}
</style>
