import Swatch from '../docs/components/Swatch'
import DocsSection from '../docs/components/Section'

const paletteDocs = `
This is the global colour palette. To access, colours are prefixed
with \`$color-\` and kebab cased.

e.g. \`$color-eire\`
`

export default {
  title: 'Tokens/Palette',
  parameters: {
    percy: { skip: true },
    docs: {
      description: {
        component: paletteDocs,
      },
    },
  },
}

export const Docs = () => ({
  components: { Swatch, DocsSection },

  template: `
    <div>
      <docs-section>
        <h2>Primary</h2>

        <docs-section>
          <h3>Eire</h3>
          <swatch color="#506b57">Eire</swatch>
          <swatch color="#899b8e">Eire lighter</swatch>
          <swatch color="#3f5444">Eire darker</swatch>
        </docs-section>
        <docs-section>
          <h3>Bounce</h3>
          <swatch color="#f92672">Bounce</swatch>
          <swatch color="#cd064d">Bounce darker</swatch>
          <swatch color="#d8316c">Bounce safe</swatch>
        </docs-section>
        <docs-section>
          <h3>Sailor</h3>
          <swatch color="#304858">Sailor</swatch>
          <swatch color="#2b3d49">Sailor hover</swatch>
          <swatch color="#3d5869">Sailor tint</swatch>
        </docs-section>
        <docs-section>
          <h3>Happy</h3>
          <swatch color="#fcca1b">Happy</swatch>
          <swatch color="#edbe1a">Happy hover</swatch>
        </docs-section>
        <docs-section>
          <h3>Misc</h3>
          <swatch color="#5890f8">Frances</swatch>
          <swatch color="#f96c46">Cheeky</swatch>
          <swatch color="#45477c">Loyal</swatch>
          <swatch color="#f4f5f9" light>Barely</swatch>
          <swatch color="#fff7fa" light>Fairly</swatch>
          <swatch color="#fff4e7" light>Rarely</swatch>
          <swatch color="#f0f3ef" light>Grey green</swatch>
        </docs-section>
      </docs-section>

      <docs-section>
        <h2>Greys</h2>

        <docs-section>
          <h3>Grey</h3>
          <swatch color="#223e49">Grey dark</swatch>
          <swatch color="#808e97">Grey mid</swatch>
          <swatch color="#b8c0c5">Grey mid light</swatch>
          <swatch color="#eaecf2" light>Grey light</swatch>
        </docs-section>

        <docs-section>
          <h3>Clay</h3>
          <swatch color="#e8eef1" light>Clay light</swatch>
          <swatch color="#c3cfd4">Clay dark</swatch>
        </docs-section>
      </docs-section>

      <docs-section>
        <h2>States</h2>
        <swatch color="#038351">Success</swatch>
        <swatch color="#a20212">Error</swatch>
      </docs-section>

      <docs-section>
        <h2>Other</h2>
        <swatch color="#fff" light>White</swatch>
        <swatch color="#000">Black</swatch>
        <swatch color="rgba(0, 0, 0, 0.08)" light>Black overlay</swatch>
      </docs-section>
    </div>
  `,
})
