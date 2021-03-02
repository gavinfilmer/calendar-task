import { shallowMount } from '@vue/test-utils'
import MPillGroup from './MPillGroup.vue'

const pillOptions = [
  { id: 1, text: '1' },
  { id: 2, text: '2' },
]

describe('PillGroup', () => {
  test('it should render correctly when not selected', () => {
    const wrapper = shallowMount(MPillGroup, {
      propsData: {
        options: pillOptions,
      },
    })

    // Make sure neither pill has the checked class assigned by default
    expect(
      wrapper.find(`#radio-option-${pillOptions[0].id}`).classes()
    ).not.toContain('m-pill-group__pill--checked')
    expect(
      wrapper.find(`#radio-option-${pillOptions[1].id}`).classes()
    ).not.toContain('m-pill-group__pill--checked')

    expect(wrapper).toMatchSnapshot()
  })

  test('it should render correctly and emit the event when each pill is selected', () => {
    const wrapper = shallowMount(MPillGroup, {
      propsData: {
        options: pillOptions,
      },
    })

    const pill1 = `radio-option-${pillOptions[0].id}`
    const pill2 = `radio-option-${pillOptions[1].id}`

    // Click the first pill
    wrapper.find(`#${pill1}`).trigger('click')

    // Check it emmitted the input event for the parent component's v-model
    expect(wrapper.emitted().input).toBeTruthy()
    // Check the emitted value was correct
    expect(wrapper.emitted().input[0]).toEqual([pillOptions[0].id])

    // Set the prop to mock the parent component's v-model
    wrapper.setProps({ value: pillOptions[0].id })

    // Check the first pill got assigned the 'checked' class
    expect(wrapper.find(`[data-qa-locator=${pill1}]`).classes()).toContain(
      'm-pill-group__pill--checked'
    )
    // Check the second pill still does not have the 'checked' class
    expect(wrapper.find(`[data-qa-locator=${pill2}]`).classes()).not.toContain(
      'm-pill-group__pill--checked'
    )

    expect(wrapper).toMatchSnapshot()

    // Click the second pill
    wrapper.find(`#${pill2}`).trigger('click')

    // Check it emmitted the input event for the parent component's v-model
    expect(wrapper.emitted().input).toBeTruthy()
    // Check the emitted value was correct
    expect(wrapper.emitted().input[0]).toEqual([pillOptions[0].id])

    // Set the prop to mock the parent component's v-model
    wrapper.setProps({ value: pillOptions[1].id })

    // Check the first pill still does not have the 'checked' class
    expect(wrapper.find(`[data-qa-locator=${pill1}]`).classes()).not.toContain(
      'm-pill-group__pill--checked'
    )
    // Check the second pill got assigned the 'checked' class
    expect(wrapper.find(`[data-qa-locator=${pill2}]`).classes()).toContain(
      'm-pill-group__pill--checked'
    )

    expect(wrapper).toMatchSnapshot()
  })

  test('it should render correctly with a unique identifier', () => {
    const wrapper = shallowMount(MPillGroup, {
      propsData: {
        options: [pillOptions[0]],
        name: 'a',
      },
    })

    expect(wrapper.find('input').attributes('id')).toBe('radio-option-a-1')

    expect(wrapper).toMatchSnapshot()
  })

  test('it should accept a stretch prop', () => {
    const wrapper = shallowMount(MPillGroup, {
      propsData: {
        options: [pillOptions[0]],
        name: 'a',
        stretch: true,
      },
    })

    expect(wrapper).toMatchSnapshot()
  })

  test('it should accept a block prop', () => {
    const wrapper = shallowMount(MPillGroup, {
      propsData: {
        options: [pillOptions[0]],
        name: 'a',
        block: true,
      },
    })

    expect(wrapper).toMatchSnapshot()
  })

  test('it should accept a merged prop', () => {
    const wrapper = shallowMount(MPillGroup, {
      propsData: {
        options: [pillOptions[0]],
        name: 'a',
        merged: true,
      },
    })

    expect(wrapper).toMatchSnapshot()
  })
})
