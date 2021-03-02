import { boolean, text } from '@storybook/addon-knobs'

import MHeadingOne from './MHeadingOne.vue'

const docs = `
Component for the main heading element of a page with options to add a stylistic dot and wrap to multiple lines.
Should normally be used as (and renders by default) an h1 element, but this can be overwritten where needed for semantic reasons.
`

export default {
  title: 'Atoms/HeadingOne',
  component: MHeadingOne,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
}

export const HeadingOne = () => {
  return {
    components: { MHeadingOne },
    computed: {
      staticClasses() {
        return text('Classes', '')
      },
    },
    props: {
      title: {
        default: text('Text', 'Heading. One.'),
      },
      dot: {
        default: boolean('Add Styled Dot', true),
      },
      linebreak: {
        default: boolean('Split on full stop', false),
      },
      tag: {
        default: text('HTML Tag', 'h1'),
      },
    },
    template: `
      <m-heading-one
        class="static-class"
        :class="staticClasses"
        :heading="title"
        :addedDot="dot"
        :linebreak="linebreak"
        :tag="tag"
      />
    `,
  }
}
