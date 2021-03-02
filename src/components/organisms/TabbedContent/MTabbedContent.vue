<template>
  <div
    v-if="tabs.length"
    class="m-tabbed-content"
    :class="`m-tabbed-content--${tabStyle}`"
  >
    <ul class="m-tabbed-content__tabs">
      <li v-if="tabTitle" class="m-tabbed-content__tab-title">
        {{ tabTitle }}
      </li>
      <li
        v-for="tab in tabs"
        :key="tab.id"
        class="m-tabbed-content__tab"
        :class="selectedTabId === tab.id ? 'm-tabbed-content__tab--active' : ''"
        role="button"
        @click="selectedTabId = tab.id"
      >
        <m-button
          v-if="tabStyle === 'button-group'"
          secondary
          :checked="selectedTabId === tab.id"
        >
          {{ tab.title }}
        </m-button>
        <template v-else>{{ tab.title }}</template>
      </li>
    </ul>

    <div class="m-tabbed-content__content">
      <component :is="selectedTab.component" v-bind="selectedTab.props" />
    </div>
  </div>
</template>

<script>
import MButton from '../../atoms/Button/MButton'
export default {
  name: 'MTabbedContent',
  components: { MButton },
  props: {
    tabTitle: {
      type: String,
      required: false,
      default: null,
    },
    tabs: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
    tabStyle: {
      type: String,
      required: true,
      default: null,
      validator: function(value) {
        // The value must match one of these strings
        return ['subnav', 'button-group'].includes(value)
      },
    },
    buttons: Boolean,
  },
  data() {
    return {
      selectedTabId: this.tabs.length ? this.tabs[0].id : null,
    }
  },
  computed: {
    selectedTab() {
      return this.tabs.find(({ id }) => this.selectedTabId === id)
    },
  },
}
</script>

<style lang="scss">
@import '../../../sass/framework/framework.scss';

$tab-gutter: $gutter-xs / 2;

.m-tabbed-content {
  margin-top: $pad-v-lg;

  &__tab,
  &__tab-title {
    list-style: none;
  }

  &__tab-title {
    // Margins adding independently to override button styles
    margin-left: $tab-gutter;
    margin-right: $pad-h-sm;

    // Full width title at small views
    @include breakpoint(sm-down) {
      text-align: center;
      width: 100%;
    }
  }

  &__content {
    margin-bottom: $pad-v-sm;
    margin-top: $pad-v-sm;
  }

  // Subnav tab layout
  &--subnav {
    .m-tabbed-content__tabs {
      display: flex;
      justify-content: flex-start;
      position: relative;
    }

    .m-tabbed-content__tab {
      @include font-size('sm');
      border-bottom: 1px solid $color-clay-dark;
      cursor: pointer;
      font-weight: $font-weight-semibold;
      padding-bottom: $pad-v-xxs;
      padding-left: $pad-h-sm;
      padding-right: $pad-h-sm;
      position: relative;
      transition: background $animation-speed ease, color $animation-speed ease;

      @include breakpoint(xs-up) {
        @include font-size('base');
        padding-left: $pad-h-lg;
        padding-right: $pad-h-lg;
      }

      &--active,
      &:hover {
        &::before {
          background-color: $color-eire;
          border-radius: 50%;
          bottom: -5px;
          content: '';
          display: block;
          height: 8px;
          left: calc(50% - 4px);
          position: absolute;
          width: 8px;
        }
      }

      &--active {
        color: $color-grey-mid;
      }
    }
  }

  // Button group tab layout
  &--button-group {
    .m-tabbed-content__tabs {
      align-items: center; // to align accompanying text
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      // Set negative margin to allow for card gutters
      margin-left: -$tab-gutter;
      margin-right: -$tab-gutter;
    }

    .m-tabbed-content__tab {
      margin-left: $tab-gutter;
      margin-right: $tab-gutter;
      margin-top: $pad-v-xxs;
    }
  }
}
</style>
