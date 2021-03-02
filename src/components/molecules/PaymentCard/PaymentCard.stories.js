import { boolean, text, radios, select } from '@storybook/addon-knobs'

import MPaymentCard from './MPaymentCard'

export default {
  title: 'Molecules/Payment Card',
  component: MPaymentCard,
  parameters: {
    info: true,
  },
}

export const PaymentCard = () => ({
  components: { MPaymentCard },
  props: {
    brand: {
      default: select(
        'Brand',
        {
          None: '',
          Visa: 'Visa',
          Mastercard: 'Mastercard',
          'American Express': 'American Express',
        },
        'Visa'
      ),
    },
    cardColor: {
      default: select(
        'Colour',
        {
          None: null,
          Red: 'color-bounce',
          Blue: 'color-frances',
          Yellow: 'color-happy',
        },
        null
      ),
    },
    fundingType: {
      default: radios(
        'Funding type',
        { None: '', Debit: 'Debit', Credit: 'Credit' },
        'Debit'
      ),
    },
    truncatedPan: {
      default: text('Truncated PAN', '1234'),
    },
    cardholder: {
      default: text('Card holder', 'Mr A N Other'),
    },
    expiryText: {
      default: text('Expiry Text', ''),
    },
    expired: {
      default: boolean('Card expired', false),
    },
    expiryMonth: {
      default: select(
        'Expiry Month',
        {
          January: '01',
          February: '02',
          March: '03',
          April: '04',
          May: '05',
          June: '06',
          July: '07',
          August: '08',
          September: '09',
          October: '10',
          November: '11',
          December: '12',
        },
        '01'
      ),
    },
    expiryYear: {
      default: select(
        'Expiry Year',
        {
          '2019': '19',
          '2020': '20',
        },
        '19'
      ),
    },
  },
  template: `
    <div style="max-width: 500px">
      <m-payment-card
        :brand="brand"
        :color="cardColor"
        :fundingType="fundingType"
        :truncatedPan="truncatedPan"
        :cardholder="cardholder"
        :expired="expired"
        :expiryText="expiryText"
        :expiryMonth="expiryMonth"
        :expiryYear="expiryYear"
      />
    </div>
  `,
})
