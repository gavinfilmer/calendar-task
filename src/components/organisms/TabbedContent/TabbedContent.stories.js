import { text } from '@storybook/addon-knobs'
import MTabbedContent from './MTabbedContent.vue'

const buttonGroup = {
  tabTitle: 'Tab Title:',
  tabStyle: 'button-group',
  buttons: true,
  tabs: [
    {
      id: 'one',
      title: 'Title One',
      component: {
        template: '<div>One - lorem ipsum</div>',
      },
    },
    {
      id: 'two',
      title: 'Title Two',
      component: {
        template: `
          <p>
            Two - lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
            sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
            amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet
          </p>
        `,
      },
    },
    {
      id: 'three',
      title: 'Title Three',
      component: {
        template: '<div>Three - lorem ipsum dolor sit amet</div>',
      },
    },
  ],
}

const subnav = {
  // subNav: true,
  tabStyle: 'subnav',
  tabs: [
    {
      id: 'subone',
      title: 'Item One',
      component: {
        template: '<div>One - lorem ipsum</div>',
      },
    },
    {
      id: 'subtwo',
      title: 'Item Two',
      component: {
        template: `
          <p>
            Two - lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet
          </p>
        `,
      },
    },
    {
      id: 'subthree',
      title: 'Item Three',
      component: {
        template: '<div>Three - lorem ipsum dolor sit amet</div>',
      },
    },
  ],
}

export default {
  title: 'Organisms/Tabbed Content',
  component: MTabbedContent,
}

export const WithButtonGroupNavigation = () => {
  return {
    components: { MTabbedContent },
    props: {
      title: {
        default: text('Tabs title', 'Select content:'),
      },
    },
    template: `
      <div class="container">
        <m-tabbed-content
          v-bind="tabs"
          :tabTitle="title"
        />
      </div>
    `,
    data: () => ({ tabs: buttonGroup }),
  }
}

const withButtonGroupNavigationDocs = `
## Button groups styles Tabs
Tabs to switch between different areas of content.

Tabs are styles similar to buttons.

Set within \`tabStyle\` prop using \`tabStyle: 'tabs--button-group'\`.
`

WithButtonGroupNavigation.parameters = {
  docs: {
    description: {
      story: withButtonGroupNavigationDocs,
    },
  },
}

export const WithSubnavNavigation = () => {
  return {
    components: { MTabbedContent },
    template: `
      <div class="container">
        <m-tabbed-content v-bind="tabs" />
      </div>
    `,
    data: () => ({ tabs: subnav }),
  }
}

const withSubnavNavigationDocs = `
## Subnav style Tabs
Tabs to switch between different areas of content.

Tabs are styled as a subnav.

Set within \`tabStyle\` prop using \`tabStyle: 'tabs--subnav'\`.
`

WithSubnavNavigation.parameters = {
  docs: {
    description: {
      story: withSubnavNavigationDocs,
    },
  },
}
