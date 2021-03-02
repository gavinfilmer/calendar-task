import DocsIcon from '../../../docs/components/Icon'
import MIcon from './MIcon.vue'
import feather from 'feather-icons'
import customIcons from './custom-icons'

const docs = `
Inline SVG icons. The icons match the font size and colour of the parent element. Icons are loaded asynchronously by Webpack.

## Base icon set
The base icon set uses [Feather Icons](https://feathericons.com/)

## Adding new icons

- Icons should be added to \`@assets/icons\` and have their fill set to \`currentColor\`.
- Icons must be 1:1 aspect ratio (square).
- Icons must be added to the object in custom-icons.js so we know where to get them

## Accessibility

- Icons should only be used in conjunction with text.
- Icons accept an accessible \`title\` prop if they must be used alone and need explaining.
`

export default {
  title: 'Atoms/Icon',
  component: MIcon,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
}

export const Icon = () => {
  return {
    components: { DocsIcon, MIcon },
    data() {
      return {
        icons: {
          ...feather.icons,
          ...customIcons,
        },
      }
    },
    template: `
      <div>
        <docs-icon v-for="icon in icons" :icon="icon.name">
          <m-icon :icon="icon.name" :title="icon.name" />
        </docs-icon>
      </div>
    `,
  }
}

export const Sizes = () => {
  return {
    components: { MIcon },
    data() {
      return {
        sizes: ['xxs', 'xs', 'sm', 'base', 'lg', 'xl', 'h4', 'h3', 'h2', 'h1'],
      }
    },
    template: `
      <div>
        <m-icon icon="dog" :size="size" v-for="size in sizes" title="Icon a11y title" />
      </div>
    `,
  }
}
