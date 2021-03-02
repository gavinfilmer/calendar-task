import Grid from './Grid.vue'
import Scaffolding from './Scaffolding.vue'
import VisibilityClasses from './VisibilityClasses.vue'

export default {
  title: 'Tokens/Layout',

  parameters: {
    percy: { skip: true },
  },
}

export const BulmaGrid = () => {
  return {
    components: { Grid },
    template: '<grid />',
  }
}

const bulmaGridDocs = `
https://bulma.io/

Bulma has 5 breakpoints:

- mobile: up to $container-xs
- tablet: from $container-xs
- desktop: from container--md
- widescreen: from $container-lg
- fullhd: from $container-xl

## Columns & Column

Docs: https://bulma.io/documentation/columns/

### Columns
\`columns\` are used to wrap a set of \`column\`s, as a row essentially.

### Column
A \`column\` makes up each column of a grid

## Device specificity

Multiple classes for each column to determine the layout for different devices


- .is-XX-mobile
- .is-XX-tablet
- .is-XX-touch
- .is-XX-desktop
- .is-XX-widescreen
- .is-XX-fullhd

## Bulma docs

- [Column sizes](https://bulma.io/documentation/columns/sizes/)
- [Responsive columns](https://bulma.io/documentation/columns/responsiveness/)
- [Mobile columns](https://bulma.io/documentation/columns/responsiveness/#mobile-columns)
- [Offset columns](https://bulma.io/documentation/columns/sizes/#offset)
- [Nesting columns](https://bulma.io/documentation/columns/nesting/)
- [Gap/gutter](https://bulma.io/documentation/columns/gap/)
- [Vertical alignment](https://bulma.io/documentation/columns/gap/)
- [Centering columns](https://bulma.io/documentation/columns/gap/)
- [Hide & Display classes](https://bulma.io/documentation/modifiers/responsive-helpers/#hide)
`

BulmaGrid.parameters = {
  docs: {
    description: {
      component: bulmaGridDocs,
    },
  },
}

export const Breakpoints = () => {
  return {
    components: { Scaffolding },
    template: '<scaffolding />',
  }
}

export const Visibility = () => {
  return {
    components: { VisibilityClasses },
    template: '<visibility-classes />',
  }
}

const visibilityDocs = `
# Visibility Classes

Table to demonstrate the workings of the media query mixins and show
when they are in use in relation to the viewport.

- \`*-down\` will activate at that breakpoint and anything below that.
- \`*-only\` will only activate at that breakpoint.
- \`*-up\` will activate at that breakpoint and anything above that.
`

Visibility.parameters = {
  docs: {
    description: {
      story: visibilityDocs,
    },
  },
}

export const Container = () => {
  return {
    template: `
      <section class="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat nulla id scelerisque pretium. Quisque in diam aliquam, suscipit sem quis, consectetur diam. Nulla facilisi. Sed efficitur quis justo in interdum. Quisque eu tincidunt risus. Etiam tincidunt eget nisi eu tristique. Nulla nulla dui, ornare at est ut, accumsan sagittis arcu. Mauris mauris ex, semper vel aliquam sit amet, viverra sed neque. Nunc eu sem condimentum, tincidunt quam a, ultrices orci. Donec erat ligula, malesuada sit amet commodo a, dictum sed diam. Ut quam augue, tincidunt et porttitor vitae, pharetra quis orci. Proin in pellentesque nunc. Sed sollicitudin dictum neque eget molestie. Ut non lobortis turpis.
        </p>
      </section>
    `,
  }
}

const containerDocs = `
This is the site-wide regular "container"

    class="container"
`

Container.parameters = {
  docs: {
    description: {
      story: containerDocs,
    },
  },
}
