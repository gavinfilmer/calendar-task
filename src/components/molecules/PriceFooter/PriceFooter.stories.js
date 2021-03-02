import { boolean, text } from '@storybook/addon-knobs'
import MPriceFooter from './MPriceFooter.vue'

export default {
  title: 'Mönster/Molecules/Price Footer',
  component: MPriceFooter,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
}

export const PriceFooter = () => ({
  components: { MPriceFooter },
  props: {
    visible: {
      default: boolean('Visible', true),
    },
    fixed: {
      default: boolean('Fixed', true),
    },
    narrowContainer: {
      default: boolean('Narrow Container', false),
    },
    fullWidthButton: {
      default: boolean('Full Width Button (Mobile size)', false),
    },
    pricePrefixText: {
      default: text('Monthly Price Prefix', 'Total: '),
    },
    priceMonthly: {
      default: text('Price monthly', '£29.27'),
    },
    priceMonthlySuffix: {
      default: text('Price monthly suffix', '/month'),
    },
  },
  // Wrap the component in a div so that we can demonstrate the sticking to the
  // bottom of the viewport behaviour
  template: `
    <div style="background: linear-gradient(#e8eef1, #c3cfd4); height: 2000px">
      <m-price-footer
        :visible="visible"
        :fixed="fixed"
        :fullWidthButton="fullWidthButton"
        :narrowContainer="narrowContainer"
        :pricePrefixText="pricePrefixText"
        :priceMonthly="overridePriceMonthly ? '£' + overridePriceMonthly + '.00' : priceMonthly"
        :priceYearly="'£' + priceYearly + '.00'"
        @click="randomizePriceMonthly"
        :priceMonthlySuffix="priceMonthlySuffix"
      >
      </price-footer>
    </div>
  `,
  computed: {
    priceYearly() {
      const monthly =
        this.overridePriceMonthly ||
        parseFloat(this.priceMonthly.replace('£', ''))
      return Math.floor(monthly * 12)
    },
  },
  data() {
    return {
      overridePriceMonthly: null,
    }
  },
  methods: {
    randomizePriceMonthly() {
      this.overridePriceMonthly = this.randomNumber(
        0,
        this.overridePriceMonthly > 100000 ? 100 : 1000000
      )
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
  },
})

export const WithBannerText = () => ({
  components: { MPriceFooter },
  props: {
    visible: {
      default: boolean('Visible', true),
    },
    fixed: {
      default: boolean('Fixed', true),
    },
    narrowContainer: {
      default: boolean('Narrow Container', false),
    },
    fullWidthButton: {
      default: boolean('Full Width Button (Mobile size)', false),
    },
    pricePrefixText: {
      default: text('Monthly Price Prefix', 'Total: '),
    },
    priceMonthly: {
      default: text('Price monthly', '£29.27'),
    },
    priceMonthlySuffix: {
      default: text('Price monthly suffix', 'mo'),
    },
  },
  // Wrap the component in a div so that we can demonstrate the sticking to the
  // bottom of the viewport behaviour
  template: `
    <div style="background: linear-gradient(#e8eef1, #c3cfd4); height: 2000px">
      <m-price-footer
        :visible="visible"
        :fixed="fixed"
        :narrowContainer="narrowContainer"
        :fullWidthButton="fullWidthButton"
        :pricePrefixText="pricePrefixText"
        :priceMonthly="overridePriceMonthly ? '£' + overridePriceMonthly + '.00' : priceMonthly"
        :priceYearly="'£' + priceYearly + '.00'"
        @click="randomizePriceMonthly"
        :priceMonthlySuffix="priceMonthlySuffix"
      >
        <template v-slot:footerExtraText>
          <span>
            By clicking continue you agree to the <a href="#">declarations</a>,
            the <a href="#">policy wording </a> and the
            <a href="/terms/" target="_blank">terms and conditions</a>.
          </span>
        </template>
      </m-price-footer>
    </div>
  `,
  computed: {
    priceYearly() {
      const monthly =
        this.overridePriceMonthly ||
        parseFloat(this.priceMonthly.replace('£', ''))
      return Math.floor(monthly * 12)
    },
  },
  data() {
    return {
      overridePriceMonthly: null,
    }
  },
  methods: {
    randomizePriceMonthly() {
      this.overridePriceMonthly = this.randomNumber(
        0,
        this.overridePriceMonthly > 100000 ? 100 : 1000000
      )
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
  },
})

const withBannerTextDocs = `
The \`footerExtraText\` slot is used to add an extra line of text to the footer.

## Usage
Provide agree declarations text within the template \`v-slot:footerExtraText\`
`

WithBannerText.parameters = {
  docs: {
    description: {
      story: withBannerTextDocs,
    },
  },
}

export const WithPromoText = () => ({
  components: { MPriceFooter },
  props: {
    visible: {
      default: boolean('Visible', true),
    },
    fixed: {
      default: boolean('Fixed', true),
    },
    narrowContainer: {
      default: boolean('Narrow Container', true),
    },
    fullWidthButton: {
      default: boolean('Full Width Button (Mobile size)', false),
    },
    pricePrefixText: {
      default: text('Monthly Price Prefix', 'Total: '),
    },
    priceMonthly: {
      default: text('Price monthly', '£29.27'),
    },
    priceMonthlySuffix: {
      default: text('Price monthly suffix', 'mo'),
    },
  },
  // Wrap the component in a div so that we can demonstrate the sticking to the
  // bottom of the viewport behaviour
  template: `
    <div style="background: linear-gradient(#e8eef1, #c3cfd4); height: 2000px">
      <m-price-footer
        :visible="visible"
        :fixed="fixed"
        :narrowContainer="narrowContainer"
        :fullWidthButton="fullWidthButton"
        :pricePrefixText="pricePrefixText"
        :priceMonthly="overridePriceMonthly ? '£' + overridePriceMonthly + '.00' : priceMonthly"
        :priceYearly="'£' + priceYearly + '.00'"
        @click="randomizePriceMonthly"
        :priceMonthlySuffix="priceMonthlySuffix"
      >
      <template v-slot:promotionalBanner>
        <span>
          Add another pet and SAVE 15% <a href="/pet-details">+ Add pet</a>
        </span>
      </template>
      </m-price-footer>
    </div>
  `,
  computed: {
    priceYearly() {
      const monthly =
        this.overridePriceMonthly ||
        parseFloat(this.priceMonthly.replace('£', ''))
      return Math.floor(monthly * 12)
    },
  },
  data() {
    return {
      overridePriceMonthly: null,
    }
  },
  methods: {
    randomizePriceMonthly() {
      this.overridePriceMonthly = this.randomNumber(
        0,
        this.overridePriceMonthly > 100000 ? 100 : 1000000
      )
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
  },
})

const withPromoTextDocs = `
The \`promotionalBanner\` slot is used to add an extra strip above the footer.

## Usage
Add another pet upsell \`v-slot:promotionalBanner\`
`

WithPromoText.parameters = {
  docs: {
    description: {
      story: withPromoTextDocs,
    },
  },
}
