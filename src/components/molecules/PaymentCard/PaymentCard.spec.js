import { shallowMount } from '@vue/test-utils'
import MPaymentCard from './MPaymentCard'

const expirySelector = '.m-payment-card__expiry'
const cardNumberSelector = '.m-payment-card__number'
const cardChipSelector = '.m-payment-card__chip'
const expiredMessageSelector = '.m-payment-card__warning'

describe('PaymentCard', () => {
  test('it should render correctly', () => {
    // Defaults
    let wrapper = shallowMount(MPaymentCard)

    expect(wrapper).toMatchSnapshot()

    // Props set
    wrapper = shallowMount(MPaymentCard, {
      propsData: {
        brand: 'Visa',
        fundingType: 'Credit',
        truncatedPan: '1234',
        cardholder: 'Mr A N Other',
        expiryMonth: '2',
        expiryYear: '2022',
      },
    })

    expect(wrapper).toMatchSnapshot()
  })

  describe('Expiry', () => {
    test('the default expiry month/year is displayed correctly', () => {
      const expected = 'Expires xx/xx'
      const wrapper = shallowMount(MPaymentCard)

      const actual = wrapper.find(expirySelector).text()

      expect(actual).toBe(expected)
    })

    test('the expiry text param month/year is displayed correctly', () => {
      const expected = 'Giltig till xx/xx'
      const wrapper = shallowMount(MPaymentCard, {
        propsData: {
          expiryText: 'Giltig till',
        },
      })

      const actual = wrapper.find(expirySelector).text()

      expect(actual).toBe(expected)
    })

    describe('Month', () => {
      test('a single-digit expiry month is displayed correctly', () => {
        const expected = 'Expires 01/xx'

        const wrapper = shallowMount(MPaymentCard, {
          propsData: {
            expiryMonth: '1',
          },
        })

        const actual = wrapper.find(expirySelector).text()

        expect(actual).toBe(expected)
      })

      test('a double-digit expiry month is displayed correctly', () => {
        let expected
        let actual
        let wrapper

        // Prefixed with 0
        expected = 'Expires 01/xx'

        wrapper = shallowMount(MPaymentCard, {
          propsData: {
            expiryMonth: '01',
          },
        })

        actual = wrapper.find(expirySelector).text()

        expect(actual).toBe(expected)

        // Month 11 or 12
        expected = 'Expires 12/xx'

        wrapper = shallowMount(MPaymentCard, {
          propsData: {
            expiryMonth: '12',
          },
        })

        actual = wrapper.find(expirySelector).text()

        expect(actual).toBe(expected)
      })
    })

    describe('Year', () => {
      test('a quadruple-digit expiry year is displayed correctly', () => {
        const expected = 'Expires xx/20'

        const wrapper = shallowMount(MPaymentCard, {
          propsData: {
            expiryYear: '1920',
          },
        })

        const actual = wrapper.find(expirySelector).text()

        expect(actual).toBe(expected)
      })

      test('a double-digit expiry year is displayed correctly', () => {
        const expected = 'Expires xx/20'

        const wrapper = shallowMount(MPaymentCard, {
          propsData: {
            expiryYear: '20',
          },
        })

        const actual = wrapper.find(expirySelector).text()

        expect(actual).toBe(expected)
      })
    })
  })

  test('truncated pan is displayed correctly', () => {
    const expected = '1 2 3 4'
    const wrapper = shallowMount(MPaymentCard, {
      propsData: {
        truncatedPan: '1234',
      },
    })
    const actual = wrapper
      .find(`${cardNumberSelector} svg:nth-child(4) text`)
      .text()

    expect(actual).toEqual(expected)
  })

  test('card displays expired message when expired', () => {
    const wrapper = shallowMount(MPaymentCard, {
      propsData: {
        expired: true,
      },
    })

    expect(wrapper.find(expiredMessageSelector).isVisible()).toBe(true)
    expect(wrapper.find(cardChipSelector).exists()).toBe(false)
  })

  test('card applies the correct color modifier class', () => {
    const wrapper = shallowMount(MPaymentCard, {
      propsData: {
        color: 'color-bounce',
      },
    })

    expect(wrapper.find('.m-payment-card').classes()).toContain(
      'm-payment-card--color-bounce'
    )
  })
})
