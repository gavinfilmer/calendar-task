import { mount, shallowMount } from '@vue/test-utils'
import MMessageBox from './MMessageBox'

describe('MMessageBox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MMessageBox)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('it renders correctly', () => {
    const wrapper = mount(MMessageBox, {
      propsData: {
        dataQaLocator: 'qa-loc',
      },
      slots: {
        default: '<div>This is content</div>',
      },
    })
    expect(wrapper).toMatchSnapshot()
  })

  test.each([
    [null, 'info'],
    ['', 'info'],
    ['info', 'info'],
    ['warning', 'warning'],
    ['error', 'error'],
  ])(
    'when alertType is "%s", it creates .message-box__container--%s',
    (alertType, expectedClassModifier) => {
      const alertClass = `.message-box__container--${expectedClassModifier}`
      const wrapper = shallowMount(MMessageBox, {
        propsData: {
          alertType,
          dataQaLocator: 'qa-loc',
        },
        slots: {
          default: '<div>This is content</div>',
        },
      })
      expect(wrapper.props().alertType).toBe(alertType)
      expect(wrapper.contains(alertClass)).toBe(true)
    }
  )
})
