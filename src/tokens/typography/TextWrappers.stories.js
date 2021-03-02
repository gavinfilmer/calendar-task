const singleLine = 'The quick brown fox jumps over the lazy dog'
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

export default {
  title: 'Tokens/Typography/Text Wrappers',
}

export const TextOnlyPageWrapper = () => {
  return {
    template: `
      <div class="container">
        <div class="text-only-wrapper">
          <h1>${singleLine}</h1>
          <p>${paragraph}</p>
          <h2>${singleLine}</h2>
          <p>${paragraph}</p>
        </div>
      </div>
    `,
  }
}

const textOnlyPageWrapperDocs = `
Set max width for pages with text only

In instances where there is only text on the page,
a set max width prevents the content from becoming
too long and not so easy to read.
`

TextOnlyPageWrapper.parameters = {
  docs: {
    description: {
      component: textOnlyPageWrapperDocs,
    },
  },
}

export const SetColumn = () => {
  return {
    template: `
      <div class="container">
        <div class="set-column">
          <h2>${singleLine}</h2>
          <p>${paragraph}</p>
        </div>
      </div>
    `,
  }
}

const setColumnDocs = `
Set max width for slimmer text areas within pages

Following new designs (Q3 2019) page text areas have a set max width.
`

SetColumn.parameters = {
  docs: {
    description: {
      story: setColumnDocs,
    },
  },
}
