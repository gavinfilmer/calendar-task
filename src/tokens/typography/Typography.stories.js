import { radios } from '@storybook/addon-knobs'

const singleLine = 'The quick brown fox jumps over the lazy dog'
const shortParagraph = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique,
  orci eu auctor tempor, arcu mauris ullamcorper augue, id congue dolor lacus
  eget quam.
`
const paragraph = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique,
  orci eu auctor tempor, arcu mauris ullamcorper augue, id congue dolor lacus
  eget quam. Vivamus vitae dui tincidunt, fermentum velit nec, consectetur tortor.
  Phasellus luctus facilisis mi vel luctus. Curabitur ornare tincidunt ipsum,
  bibendum convallis ligula eleifend et. Praesent sodales magna et vestibulum
  tincidunt. Vestibulum tincidunt elit auctor luctus rhoncus. Nulla imperdiet
  tincidunt ligula eget volutpat. Quisque vel dolor imperdiet, laoreet enim ut,
  varius nisi.
`

const weightOptions = {
  Regular: '',
  Semibold: 'font-weight--semibold',
  Bold: 'font-weight--bold',
}

const alignOptions = {
  Left: 'text-left',
  Right: 'text-right',
  Center: 'text-center',
  'Center xs-up': 'text-center--xs-up',
}

export default {
  title: 'Tokens/Typography',

  parameters: {
    percy: { skip: true },
    info: {
      source: false,
    },
  },
}

export const FontHierarchy = () => {
  return {
    template: `
      <div class="container text-only-wrapper">
        <h1>h1 (Hero) - ${singleLine}</h1>
        <h2>h2 (Large) - ${singleLine}</h2>
        <h3>h3 (Medium) - ${singleLine}</h3>
        <h4>h4 - ${singleLine}</h4>
        <p class="font--xxl"><strong>XX Large</strong> - ${shortParagraph}</p>
        <p class="font--xl"><strong>Extra Large</strong> - ${shortParagraph}</p>
        <p class="font--lg"><strong>Large</strong> - ${paragraph}</p>
        <p><strong>Paragraph</strong> - ${paragraph}</p>
        <p class="font--small"><strong>Small</strong> - ${paragraph}</p>
        <p class="font--micro"><strong>Micro</strong> - ${paragraph}</p>
        <p class="font--nano"><strong>Nano</strong> - ${paragraph}</p>
      </div>
    `,
  }
}

FontHierarchy.parameters = {
  docs: {
    description: {
      story: `
        # Font scaling for relative font sizes

        - Font scale based on modular scale of 1.20.
        - Line heights on 1.50 ratio for paragraph copy, 1.04 ratio for heading copy.
        - Paragraph sizes same for mobile and desktop, Heading sizes smaller for mobile.

        **Note: For H1 headings, use the HeadingOne component**
      `,
    },
  },
}

export const FontModifications = () => {
  return {
    props: {
      fontWeight: {
        default: radios('Weight', weightOptions),
      },
      textAlign: {
        default: radios('Alignment', alignOptions),
      },
    },
    template: `
      <div class="container">
        <p :class="[fontWeight, textAlign]">${paragraph}</p>
      </div>
    `,
  }
}

const fontModificationsDocs = `
Various additional classes can be applied to text to change the font
weight and text alignment.

## Font weights
- Regular weight - \`no class added\`
- Semibold weight  \`font-weight--semibold\`
- Bold weight \`font-weight--bold\`

## Text alignment
- Left aligned text \`text-left\`
- Right aligned text \`text-right\`
- Center aligned text \`text-center\`
- Center aligned text on tablet and desktop, left aligned on mobile \`text-center\`
`

FontModifications.parameters = {
  docs: {
    description: {
      story: fontModificationsDocs,
    },
  },
}
