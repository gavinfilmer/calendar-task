import { mount, shallowMount } from '@vue/test-utils'
import MHeadingOne from './MHeadingOne.vue'

describe('HeadingOne', () => {
  it('renders correctly', () => {
    const wrapper = mount(MHeadingOne)
    expect(wrapper).toMatchSnapshot()
  })

  it('should default to "Bought By Many" heading', () => {
    const wrapper = shallowMount(MHeadingOne)
    expect(wrapper.find('h1').text()).toBe('Bought By Many')
  })

  test('renders correctly when heading string prop is passed', () => {
    const wrapper = shallowMount(MHeadingOne, {
      propsData: {
        heading: 'Passed Header String',
      },
    })
    expect(wrapper.find('h1').text()).toBe('Passed Header String')
  })
})
