<template>
  <div class="docs-icon">
    <div class="docs-icon__icon">
      <slot />
    </div>
    <div class="docs-icon__name">
      {{ icon }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import '~@/sass/framework/framework';
.docs-icon {
  border: 1px solid $color-clay-light;
  display: inline-block;
  margin: $pad-v-xxs $pad-h-sm;
  padding: $pad-v-xxs $pad-h-sm;
  text-align: center;

  &__icon {
    display: block;
    font-size: 2em;
    line-height: 1;
  }

  &__name {
    @include font-size(sm);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 4em;
  }
}
</style>
