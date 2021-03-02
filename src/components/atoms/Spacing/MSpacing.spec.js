import { shallowMount, createLocalVue } from '@vue/test-utils'
import MSpacing from './MSpacing'

const localVue = createLocalVue()

describe('Spacing', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MSpacing, {
      localVue,
      propsData: {
        top: 'sm',
        left: 'md',
        right: 'lg',
        bottom: 'xl',
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
