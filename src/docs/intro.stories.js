export default {
  title: 'Docs/Intro',
}

export const Intro = () => {
  return {
    template: `<div class="padded-block container text-only-wrapper">
        <h1>Bought By Many - Calendar task</h1>

        <p>We would like you to build out a calendar widget within storybook.
        This is primarily an HTML/CSS task, but will touch on the lighter side
        of Vue/Javascript.</p>

        <p>The storybook project already has some atomic components and SCSS variables,
        which you are welcome to use to assist you. We would expect a mobile-first
        approach, using BEM in the SASS, and creating reusable, content-agnostic
        components that would be easily adopted across different projects and in
        multiple regions.
        </p>

        <h2>Requirements</h2>
        <ul class="list list--padded list--content-aligned">
          <li>Node.js</li>
        </ul>

        <h2>Getting set up</h2>
        <ol class="list list--padded list--content-aligned">
          <li>
            <strong>Clone the repository.</strong><br />
            <code>
              git clone git@github.com:boughtbymany/fe-candidate-task-
              [your_github_username].git
            </code>
          </li>
          <li>
            <strong>Install dependencies</strong><br />
            <code>npm install</code>
          </li>
          <li>
            <strong>Run Storybook</strong><br />
            <code>npm run storybook</code>
          </li>
        </ol>

        <h2>A few things to help get you started</h2>
        <ul class="list list--padded list--content-aligned">
        <li>The calendar HTML should live in \`Calendar.vue\` and should be visible in storybook using a \`.stories\` file to create it’s own story/stories</li>
        <li>CSS should be written in SASS. Grunt is set up to watch your SASS files, so just save the SASS file and refresh the page in your browser to see your changes</li>
        <li>The calendar component needs to be responsive. There is a mobile and desktop design</li>
        <li>Please re-use existing variables where you can (these can be found in \`/scss/framework/_variables.scss\`)</li>
        <li>To save you time we've created the icons you need. Take a look at the icons story in storybook to see the icons available to you and how to use them</li>
        </ul>
      </div>`,
  }
}
