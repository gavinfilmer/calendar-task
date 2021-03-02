import { shallowMount } from '@vue/test-utils'
import MPriceFooter from './MPriceFooter'

describe('MPriceFooter', () => {
  test('it renders correctly', () => {
    const wrapper = shallowMount(MPriceFooter, {
      propsData: {
        priceMonthly: '£1.00',
        priceMonthlySuffix: '/month',
        priceYearly: '£12.00',
        pricePrefixText: 'Total: ',
        narrowContainer: true,
      },
    })
    expect(wrapper.find('.price-footer__content').classes()).toContain(
      'price-footer__content--narrow'
    )

    expect(wrapper).toMatchSnapshot()
  })
  test('it renders with extra text slot', () => {
    const extraText = 'By clicking continue you agree to the t&cs'
    const wrapper = shallowMount(MPriceFooter, {
      propsData: {
        priceMonthly: '£1.00',
        priceMonthlySuffix: '/month',
        priceYearly: '£12.00',
        pricePrefixText: 'Total: ',
      },
      slots: {
        footerExtraText: extraText,
      },
    })
    const banner = wrapper.find('.price-footer__extra-text').text()
    expect(banner).toBe(extraText)
  })
  test('it renders with promotional message slot', () => {
    const promotionalBanner = 'You can save 15% off this price today'
    const wrapper = shallowMount(MPriceFooter, {
      propsData: {
        priceMonthly: '£1.00',
        priceMonthlySuffix: '/month',
        priceYearly: '£12.00',
        pricePrefixText: 'Total: ',
      },
      slots: {
        promotionalBanner: promotionalBanner,
      },
    })
    const banner = wrapper.find('.price-footer__promo-content').text()
    expect(banner).toBe(promotionalBanner)
  })
})
