import MPillGroup from './MPillGroup.vue'

const docs = `
The pill group can be used as a radio style select tool by passing in an
array of objects and v-modeling it against a local variable

Props:

- **\`options\`**
  This must be an array of objects containing at least the keys \`id\`
  used as the value of the input and \`text\` used to display on the pill
- **\`stretch\`**
  Stretch the pills to fill the space given to the parent component
- **\`block\`**
  Make each pill 100% width of the group
- **\`merged\`**
  Merge the pills into one big pill. Prevents \`stretch\` having an effect.
`

export default {
  title: 'Atoms/Pill Group',
  component: MPillGroup,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
}

const values = [
  {
    id: 1,
    text: '1',
  },
  {
    id: 2,
    text: '2',
  },
  {
    id: 3,
    text: '3',
  },
]

export const Default = () => {
  return {
    components: { MPillGroup },
    data: () => ({
      values,
      selectedValue: null,
    }),
    template: `
      <m-pill-group
        v-model="selectedValue"
        :options="values"
      ></m-pill-group>
    `,
  }
}

export const Stretch = () => {
  return {
    components: { MPillGroup },
    data: () => ({
      values,
      selectedValue: null,
    }),
    template: `
      <m-pill-group
        v-model="selectedValue"
        :options="values"
        stretch
      ></m-pill-group>
    `,
  }
}

export const Block = () => {
  return {
    components: { MPillGroup },
    data: () => ({
      values,
      selectedValue: null,
    }),
    template: `
      <m-pill-group
        v-model="selectedValue"
        :options="values"
        block
      ></m-pill-group>
    `,
  }
}

export const Merged = () => {
  return {
    components: { MPillGroup },
    data: () => ({
      values,
      selectedValue: null,
    }),
    template: `
      <m-pill-group
        v-model="selectedValue"
        :options="values"
        merged
      ></m-pill-group>
    `,
  }
}

export const MergedBlock = () => {
  return {
    components: { MPillGroup },
    data: () => ({
      values,
      selectedValue: null,
    }),
    template: `
      <m-pill-group
        v-model="selectedValue"
        :options="values"
        merged
        block
      ></m-pill-group>
    `,
  }
}
