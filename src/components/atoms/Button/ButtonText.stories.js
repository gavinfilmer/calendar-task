import MButton from './MButton.vue'

const docs = `
- **Underline**
- **No underline**
- **External link** For links that will open a new page or leave the site
- **Chevron** Indicates a page change.
- **Edit** Edit data, such as pet details
`

export default {
  title: 'Atoms/Button/Text',
  component: MButton,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
}

export const Types = () => ({
  components: {
    MButton,
  },
  template: `
    <div>
      <m-button tag="a" href="#" link-style="underline">Underline</m-button><br />
      <m-button tag="a" href="#" link-style="no-underline">No underline</m-button><br />
      <m-button tag="a" href="#" link-style="external-link">External</m-button><br />
      <m-button tag="a" href="#" link-style="edit">Edit</m-button><br />
      <m-button tag="a" href="#" link-style="chevron-left">Chevron left</m-button><br />
      <m-button tag="a" href="#" link-style="chevron-right">Chevron right</m-button><br />
      <m-button tag="a" href="#" link-style="chevron-up">Chevron up</m-button><br />
      <m-button tag="a" href="#" link-style="chevron-down">Chevron down</m-button><br />
    </div>
  `,
})

Types.parameters = {
  docs: {
    description: {
      story: docs,
    },
  },
}

export const Sizes = () => ({
  components: {
    MButton,
  },
  data() {
    return {
      styles: [
        'underline',
        'no-underline',
        'external-link',
        'edit',
        'chevron-right',
      ],
    }
  },
  methods: {
    format(style) {
      return style.replace('-', ' ')
    },
  },
  template: `
    <div style="display: flex">
      <div v-for="style of styles">
        <m-button tag="a" :link-style="style" size="micro">{{ format(style) }}</m-button><br />
        <m-button tag="a" :link-style="style" size="small">{{ format(style) }}</m-button><br />
        <m-button tag="a" :link-style="style">{{ format(style) }}</m-button><br />
        <m-button tag="a" :link-style="style" size="large">{{ format(style) }}</m-button>
      </div>
    </div>
  `,
})

Sizes.parameters = {
  docs: {
    description: {
      story:
        'Not recommended to use "large" on text buttons. External link and edit do not work well with the size prop.',
    },
  },
}
