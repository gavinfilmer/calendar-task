import { shallowMount } from '@vue/test-utils'
import MButton from './MButton.vue'

describe('MButton', () => {
  test('it renders the button correctly when no props are passed', () => {
    const wrapper = shallowMount(MButton)
    expect(wrapper).toMatchSnapshot()
  })

  test('it passes children through', () => {
    const wrapper = shallowMount(MButton, {
      slots: {
        default: 'test',
      },
    })
    expect(wrapper).toMatchSnapshot()
  })

  test('tag can be updated from default', () => {
    const wrapper = shallowMount(MButton, {
      propsData: {
        tag: 'a',
      },
    })
    expect(wrapper).toMatchSnapshot()
  })

  describe('getting proper styles', () => {
    test('it has a primary style', () => {
      const wrapper = shallowMount(MButton)
      expect(wrapper.classes()).toContain('m-button--primary')
    })

    test('it has a pop style', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          pop: true,
        },
      })
      expect(wrapper.classes()).toContain('m-button--pop')
      expect(wrapper.classes()).not.toContain('m-button--primary')
    })

    test('it has a secondary style', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          secondary: true,
        },
      })
      expect(wrapper.classes()).toContain('m-button--secondary')
      expect(wrapper.classes()).not.toContain('m-button--primary')
    })

    test('it has a multipet style', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          multipet: true,
        },
      })
      expect(wrapper.classes()).toContain('m-button--multipet')
      expect(wrapper.classes()).not.toContain('m-button--primary')
    })

    test('it has a checked style', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          checked: true,
        },
      })
      expect(wrapper.classes()).toContain('m-button--checked')
      expect(wrapper.classes()).not.toContain('m-button--primary')
    })
  })

  describe('link styles', () => {
    test('it has underline class', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          linkStyle: 'underline',
        },
      })
      expect(wrapper.classes()).not.toContain('m-button')
      expect(wrapper.classes()).toContain('m-button--underline')
    })
    test('it has no-underline class', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          linkStyle: 'no-underline',
        },
      })
      expect(wrapper.classes()).not.toContain('m-button')
      expect(wrapper.classes()).toContain('m-button--no-underline')
    })
    test('it has external-link class', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          linkStyle: 'external-link',
        },
      })
      expect(wrapper.classes()).not.toContain('m-button')
      expect(wrapper.classes()).toContain('m-button--external-link')
    })
    describe("it has chevron classes and doesn't contain .m-button class", () => {
      test.each(['left', 'right', 'up', 'down'])('%s', direction => {
        const wrapper = shallowMount(MButton, {
          propsData: {
            linkStyle: `chevron-${direction}`,
          },
        })
        expect(wrapper.classes()).toContain(`m-button--chevron`)
        expect(wrapper.classes()).toContain(`m-button--chevron-${direction}`)
        expect(wrapper.classes()).not.toContain('m-button')
      })
    })
  })

  describe('click interactions', () => {
    test('is clickable', () => {
      const click = jest.fn()
      const wrapper = shallowMount(MButton, {
        propsData: {
          tag: 'div',
        },
        listeners: {
          click,
        },
      })
      wrapper.trigger('click')
      expect(click).toHaveBeenCalled()
    })

    test('unclickable when disabled', () => {
      const click = jest.fn()
      const wrapper = shallowMount(MButton, {
        propsData: {
          tag: 'div',
          isDisabled: true,
        },
        listeners: {
          click,
        },
      })
      wrapper.trigger('click')
      expect(click).not.toHaveBeenCalled()
    })

    test('unclickable when loading', () => {
      const click = jest.fn()
      const wrapper = shallowMount(MButton, {
        propsData: {
          tag: 'div',
          loading: true,
        },
        listeners: {
          click,
        },
      })
      wrapper.trigger('click')
      expect(click).not.toHaveBeenCalled()
    })
  })

  describe('additional styles', () => {
    test('has disabled style', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          isDisabled: true,
        },
      })
      expect(wrapper.attributes().disabled).toBeTruthy()
    })
    test('has loading style', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          loading: true,
        },
      })
      expect(wrapper.classes()).toContain('m-button--progress')
    })
    test('has dropdown style', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          dropdown: true,
        },
      })
      expect(wrapper.classes()).toContain('m-button--dropdown')
    })
    describe('has sizes', () => {
      test.each(['small', 'micro', 'large'])('%s', size => {
        const wrapper = shallowMount(MButton, {
          propsData: {
            size: size,
          },
        })
        expect(wrapper.classes()).toContain(`m-button--${size}`)
      })
    })
    test('block', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          block: true,
        },
      })
      expect(wrapper.classes()).toContain('m-button--block')
    })
    test('block mobile only', () => {
      const wrapper = shallowMount(MButton, {
        propsData: {
          block: 'mobile',
        },
      })
      expect(wrapper.classes()).toContain('m-button--block-mobile')
    })
  })
  test('passes and merges all attributes down', () => {
    const wrapper = shallowMount(MButton, {
      attrs: {
        'aria-label': 'label',
        type: 'reset',
        id: 'special-id',
        class: 'special-class',
      },
    })
    expect(wrapper.attributes('aria-label')).toBe('label')
    expect(wrapper.attributes('type')).toBe('reset')
    expect(wrapper.attributes('id')).toBe('special-id')
    expect(wrapper.classes()).toContain('special-class')
  })
})
