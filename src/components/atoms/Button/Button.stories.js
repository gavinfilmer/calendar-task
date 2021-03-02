import MButton from './MButton.vue'

const docs = `
- **Pop** An alternative primary button.
- **Primary** The default, this is the primary button.
- **Secondary** Contrasting or complimenting CTA(s). Used when responses required are secondary or not of equal importance.
`

export default {
  title: 'Atoms/Button/Default',
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
      <m-button pop>Pop button</m-button>
      <m-button primary>Primary button</m-button>
      <m-button secondary>Secondary button</m-button>
      <m-button multipet>Multipet button</m-button>
    </div>
  `,
})

export const Sizes = () => ({
  components: {
    MButton,
  },
  template: `
    <div>
      <m-button size="micro">Micro button</m-button>
      <m-button size="small">Small button</m-button>
      <m-button>Default button</m-button>
      <m-button size="large">Large button</m-button>
    </div>
  `,
})

export const FullWidth = () => ({
  components: {
    MButton,
  },
  template: `
    <m-button block>Full width button</m-button>
  `,
})

export const Checked = () => ({
  components: {
    MButton,
  },
  template: `
    <div>
      <m-button pop checked>Pop button</m-button>
      <m-button primary checked>Primary button</m-button>
      <m-button secondary checked>Secondary button</m-button>
      <m-button multipet checked>Multipet button</m-button>
    </div>
  `,
})

Checked.parameters = {
  docs: {
    description: {
      story: 'Always looks the same regardless of button type.',
    },
  },
}

export const Disabled = () => ({
  components: {
    MButton,
  },
  template: `
    <div>
      <m-button pop is-disabled>Pop button</m-button>
      <m-button primary is-disabled>Primary button</m-button>
      <m-button secondary is-disabled>Secondary button</m-button>
      <m-button multipet is-disabled>Multipet button</m-button>
    </div>
  `,
})

export const Add = () => ({
  components: {
    MButton,
  },
  template: `
    <div>
      <m-button add>Add button</m-button>
      <m-button add added>Added button</m-button>
    </div>
  `,
})

Add.parameters = {
  docs: {
    description: {
      story: 'Currently only available as secondary style',
    },
  },
}

export const Dropdown = () => ({
  components: {
    MButton,
  },
  template: `
    <div>
      <m-button pop dropdown>Pop button</m-button>
      <m-button primary dropdown>Primary button</m-button>
      <m-button secondary dropdown>Secondary button</m-button>
      <m-button multipet dropdown>Multipet button</m-button>
    </div>
  `,
})

export const Loading = () => ({
  components: {
    MButton,
  },
  template: `
    <div>
      <m-button pop loading>Pop button</m-button>
      <m-button primary loading>Primary button</m-button>
      <m-button secondary loading>Secondary button</m-button>
      <m-button multipet loading>Multipet button</m-button>
    </div>
  `,
})

export const AriaLabel = () => {
  return {
    components: { MButton },
    template: `
      <m-button aria-label="Close">
        X
      </m-button>
    `,
  }
}

const ariaDocs = `
For a11y purposes, this allows an \`aria-label\` to describe what the buttons actions is when an icon is used
`

AriaLabel.parameters = {
  docs: {
    description: {
      story: ariaDocs,
    },
  },
}
