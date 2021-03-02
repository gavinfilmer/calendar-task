import VerticalPaddingRules from './VerticalPaddingRules.vue'
import HorizontalPaddingRules from './HorizontalPaddingRules.vue'

export default {
  title: 'Tokens/Padding',
  parameters: {
    percy: { skip: true },
  },
}

export const VerticalPadding = () => {
  return {
    components: { VerticalPaddingRules },
    template: '<vertical-padding-rules />',
  }
}

const verticalPaddingDocs = `
Demonstration of the global vertical padding rules set up within BBM UI Toolkit, which should be used throughout all areas of the site to determine margin/padding in all vertical instances.

All vertical padding is based on a 4px grid.

Padding/Margin size is shown as pink area.
`

VerticalPadding.storyName = 'Vertical padding'

VerticalPadding.parameters = {
  docs: {
    description: {
      component: verticalPaddingDocs,
    },
  },
}

export const HorizontalPadding = () => {
  return {
    components: { HorizontalPaddingRules },
    template: '<horizontal-padding-rules />',
  }
}

const horizontalPaddingDocs = `
Demonstration of the horizontal global padding rules set up within BBM UI Toolkit, which should be used throughout all areas of the site to determine margin/padding in all horizontal instances.

All horizontal padding is based on a 5px grid.

Padding/Margin size is shown as pink area.
`

HorizontalPadding.storyName = 'Horizontal padding'

HorizontalPadding.parameters = {
  docs: {
    description: {
      component: horizontalPaddingDocs,
    },
  },
}
