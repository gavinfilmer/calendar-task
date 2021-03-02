import MSpacing from './MSpacing'

export default {
  title: 'Atoms/Spacing',
  component: MSpacing,
}

export const docs = () => ({
  components: { MSpacing },
  template: `
    <m-spacing top="md" bottom="md" left="md" right="md">
      Some content
    </m-spacing>
  `,
})

docs.parameters = {
  docs: {
    description: {
      component:
        'A spacing utility component. For when you just need a little nudge.',
    },
  },
}

export const inline = () => ({
  components: { MSpacing },
  template: `
    <div>
      Can also be <m-spacing inline left="lg" right="lg">inline</m-spacing> for horizontal spacing only
    </div>
  `,
})
