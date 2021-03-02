import { radios } from '@storybook/addon-knobs'
import MTag from './MTag.vue'

const label = 'Tag Color'
const options = {
  Happy: 'color-happy',
  Cheeky: 'color-cheeky',
  Sailor: 'color-sailor',
  'Clay Light': 'color-clay-light',
  'Clay Dark': 'color-clay-dark',
  'Grey Green': 'color-grey-green',
  Loyal: 'color-loyal',
  Frances: 'color-frances',
}

const docs = `
The \`tagStyle\` prop takes a string of a colour name where where the colour name is one of:

* \`color-happy\`
* \`color-sailor\`
* \`color-cheeky\`
* \`color-clay-light\`
* \`color-clay-dark\`
* \`color-grey-green\`
* \`color-loyal\`
* \`color-frances\`
`

export default {
  title: 'Atoms/Tag',
  component: MTag,
  parameters: {
    docs: {
      description: {
        components: docs,
      },
    },
  },
}

export const Tag = () => {
  return {
    components: { MTag },
    props: {
      tagColor: {
        default: radios(label, options, 'color-happy'),
      },
    },
    template: '<m-tag :tagStyle="tagColor">Tag Text</m-tag>',
  }
}
