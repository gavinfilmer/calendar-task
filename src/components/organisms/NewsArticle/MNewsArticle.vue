<template>
  <article class="m-article">
    <div class="m-article__image m-article-image" :style="articleImageStyle">
      <m-tag v-if="tagText" class="m-article-image__tag">
        {{ tagText }}
      </m-tag>
    </div>
    <h3 class="m-article__title">
      <a v-if="articleLink" :href="articleLink" class="m-article__link">
        {{ title }}
      </a>
      <template v-else>
        {{ title }}
      </template>
    </h3>
    <div v-if="content" class="m-article__content">
      {{ content }}
      <div v-if="date" class="meta-info">
        {{ date }}
      </div>
    </div>
  </article>
</template>

<script>
import MTag from '../../atoms/Tag/MTag.vue'

export default {
  name: 'MNewsArticle',
  components: {
    MTag,
  },
  props: {
    articleLink: String,
    articleImage: String,
    content: String,
    tagText: String,
    title: String,
    date: String,
  },
  computed: {
    articleImageStyle() {
      return `background-image: url('${this.articleImage}')`
    },
  },
}
</script>

<style lang="scss">
@import '../../../sass/framework/framework.scss';

.m-article {
  display: inline-block;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative; // for positioning of link over sticker

  &__image {
    background-color: $color-clay-dark;
    background-position: center center;
    background-size: cover;
    margin-bottom: $pad-v-lg;
    padding-top: 66%;
    position: absolute;
    width: 100%;

    &::after {
      background-color: $color-black-overlay;
      bottom: 0;
      content: '';
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: opacity $animation-speed ease;
    }
  }

  &__title {
    font-family: $font-family-sans-serif;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    margin-bottom: $pad-v-xs;
  }

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color $animation-speed ease;

    &::after {
      bottom: 0;
      content: '';
      display: block;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  }

  &__content {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;

    p {
      flex-grow: 1; // allows date to align to the bottom
    }

    .meta-info {
      color: $color-grey-mid;
      font-size: $font-size-xs;
    }
  }

  &:hover {
    .m-article__image::after {
      opacity: 1;
    }
  }

  // article-image block to position __tag element
  &-image {
    position: relative;

    &__tag {
      left: 16px;
      position: absolute;
      top: 20px;
    }
  }
}

.m-article-scroll-list {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  position: relative;

  @include breakpoint(sm-up) {
    overflow-x: hidden; // To hide scroll bar on Edge whilst not in use
  }

  &__item {
    flex: 1;
    margin: 0 $pad-h-lg 0 0;
    min-width: 240px;

    @include breakpoint(xs-only) {
      min-width: calc(50% - #{$pad-h-sm});
    }

    @include breakpoint(md-up) {
      min-width: calc((100% - #{$pad-h-md * 4}) / 3); // To be 33% after gutter
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
