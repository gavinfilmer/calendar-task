import { shallowMount } from '@vue/test-utils'
import MIcon from './MIcon.vue'

describe('Icon', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MIcon, {
      propsData: { icon: 'cat' },
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with a title', () => {
    const wrapper = shallowMount(MIcon, {
      propsData: { icon: 'cat', title: 'Title' },
    })
    expect(wrapper.find('.m-icon').attributes('title')).toBe('Title')
  })
})
