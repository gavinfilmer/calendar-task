<template>
  <section class="container padded-block">
    <h1>Bulma grid</h1>
    <p>
      <a href="https://bulma.io/documentation/columns/sizes/" target="_blank">
        Bulma column docs
      </a>
    </p>
    <p>
      See storybook info tab for further info and links to Bulma docs
    </p>
    <br />
    <h4>12 column layout</h4>
    <div class="columns">
      <div class="column is-6">
        <div class="demo-inner"><code>is-6</code></div>
      </div>
      <div class="column">
        <div class="demo-inner"><code>1</code></div>
      </div>
      <div class="column">
        <div class="demo-inner"><code>1</code></div>
      </div>
      <div class="column">
        <div class="demo-inner"><code>1</code></div>
      </div>
      <div class="column">
        <div class="demo-inner"><code>1</code></div>
      </div>
      <div class="column">
        <div class="demo-inner"><code>1</code></div>
      </div>
      <div class="column">
        <div class="demo-inner"><code>1</code></div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-1">
        <div class="demo-inner"><code>is-1</code></div>
      </div>
      <div class="column is-11">
        <div class="demo-inner"><code>is-11</code></div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        <div class="demo-inner"><code>is-2</code></div>
      </div>
      <div class="column is-10">
        <div class="demo-inner"><code>is-10</code></div>
      </div>
    </div>
    <hr />
    <h4>Switch column size between Tablet and Desktop</h4>

    <div class="columns">
      <div class="column is-4-tablet is-3-desktop">
        <div class="demo-inner"><code>is-4-tablet is-3-desktop</code></div>
      </div>
      <div class="column is-8-tablet is-9-desktop">
        <div class="demo-inner"><code>is-8-tablet is-9-desktop</code></div>
      </div>
    </div>

    <hr />
    <h4>Maintain columns on mobile</h4>
    <div class="columns is-mobile">
      <div class="column is-4">
        <div class="demo-inner"><code>is-4</code></div>
      </div>
      <div class="column is-8">
        <div class="demo-inner"><code>is-8</code></div>
      </div>
    </div>

    <hr />
    <h4>Columns as proportions</h4>
    <div class="columns">
      <div class="column is-four-fifths">
        <div class="demo-inner"><code>is-four-fifths</code></div>
      </div>
      <div class="column is-one-fifth">
        <div class="demo-inner"><code>is-one-fifth</code></div>
      </div>
    </div>

    <div class="columns">
      <div class="column is--one-third">
        <div class="demo-inner"><code>is--one-third</code></div>
      </div>
      <div class="column is-two-thirds">
        <div class="demo-inner"><code>is-two-thirds</code></div>
      </div>
    </div>

    <hr />
    <h4>Offset column</h4>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="demo-inner"><code>is-half is-offset-one-quarter</code></div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <div class="demo-inner"><code>is-10 is-offset-1</code></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'grid',
}
</script>

<style lang="scss">
@import '~@/sass/framework/framework';

.column {
  .demo-inner {
    background: $color-grey-mid-light;
    text-align: center;
  }

  &:nth-child(odd) {
    .demo-inner {
      background: $color-grey-light;
    }
  }
}
</style>
