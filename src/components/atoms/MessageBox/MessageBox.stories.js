import { text, radios } from '@storybook/addon-knobs'
import MMessageBox from './MMessageBox.vue'

const alertType = {
  '(default)': '',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

const docs = `
The message box displays a message or html content with a warning/notification icon and a grey background.
`

export default {
  title: 'Atoms/Message Box',
  component: MMessageBox,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
}

export const MessageBox = () => {
  return {
    components: { MMessageBox },

    props: {
      content: {
        default: text(
          'Content',
          'This is a message to impart some information.'
        ),
      },

      alertType: {
        default: radios('Severity (alertType)', alertType, ''),
      },
    },
    template: `
      <div class="container padded-block">
        <m-message-box :alert-type="alertType">{{ content }}</m-message-box>
      </div>
    `,
  }
}
