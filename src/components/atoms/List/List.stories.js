import { radios } from '@storybook/addon-knobs'

const listOptions = {
  Regular: '',
  Unstyled: 'list--unstyled',
  Padded: 'list--padded',
  'Content Aligned': 'list--content-aligned',
  'All discs': 'list--all-discs',
  Inline: 'list--inline',
  '2 Columns': 'list--columns-2',
  '3 Columns': 'list--columns-3',
  'Inline Centered': 'list--inline list--centered',
  Star: 'list--star',
  Tick: 'list--tick',
}

const docs = `
Various additional classes can be applied to a list to add a selection of styles

Use the **Knobs** tab to interact with the list with these additional classes.

|Style|Class(es)|Description|
|:----|:--------|:----------|
|Unstyled|\`list--unstyled\`|Removes default list disc style, and padding and margin associated to that.|
|Padded|\`list--padded\`|Adds padding to list items.|
|Content Aligned|\`list--content-aligned\`|Amends list padding to align the list with other content.|
|All discs|\`list--all-discs\`|Changes all list styles to discs, rather than nested lists using circle or square|
|Inline|\`list--inline\`|Bring list items inline with each other (best used on small text content lists)|
|2 Columns|\`list--columns-2\`|Breaks content into 2 columns for tablet and desktop, 1 column on mobile|
|3 Columns|\`list--columns-3\`|Breaks content into 3 columns on desktop, then 2 columns on tablet, 1 column on mobile|
|Inline Centered|\`list--inline\` \`list--centered\`|Combining the \`list--inline\` and \`list--centered\` classes to make lists sit inline and place list in center of available space|
|Star|\`list--star\`|Uses a star instead of a disc|
|Tick|\`list--tick\`|Uses checkmarks in circles instead of discs|
`

export default {
  title: 'Atoms/Lists',
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
}

export const Unordered = () => {
  return {
    props: {
      mods: {
        default: radios('Options', listOptions),
      },
    },
    template: `
      <div class="container">
        <p>Unordered list:</p>
        <ul class="list" :class="mods">
          <li v-for="n of 4">List Item {{n}}</li>
          <li>
            Sub list
            <ul>
              <li v-for="n of 4">Sub List Item {{n}}</li>
            </ul>
          </li>
          <li>
            Sub ordered list
            <ol>
              <li v-for="n of 4">Sub List Item {{n}}</li>
            </ol>
          </li>
        </ul>
      </div>
    `,
  }
}

export const Ordered = () => {
  return {
    props: {
      mods: {
        default: radios('Options', listOptions),
      },
    },
    template: `
      <div class="container">
      <p>Ordered list:</p>
        <ol class="list" :class="mods">
          <li v-for="n of 4">List Item {{n}}</li>
          <li>
            Sub ordered list
            <ol>
              <li v-for="n of 4">Sub List Item {{n}}</li>
            </ol>
          </li>
          <li>
            Sub unordered list
            <ul>
              <li v-for="n of 4">Sub List Item {{n}}</li>
            </ul>
          </li>
        </ol>
      </div>
    `,
  }
}
