# Contributing

## Project setup
```
npm install
```
## Run storybook
```
npm run storybook
```
## Build storybook
```
npm run build-storybook
```

## Coding standards

The [Vue CLI ESLint plugin](https://cli.vuejs.org/config/#eslint) is used to lint code.

Code is linted automatically on save during development by the Webpack plugin,
[eslint-loader](https://github.com/webpack-contrib/eslint-loader). Linting is
also performed on staged files before a commit. If you use VS Code, it will be
set up to lint as you type and fix auto-fixable issues on save.

To manually lint code, run:

```shell
npm run lint # To check for linting issues
npm run lint:fix # To fix all auto-fixable issues
```

ESLint can also be [integrated within other IDEs](https://eslint.org/docs/user-guide/integrations).

### Styling

We also use `stylelint` to lint the (S)CSS. It runs on git commit, and in VS
Code it'll run on save. We don't currently integrate into vue-cli/webpack with
it but this may be a future thing as it _is_ possible.

It can be run manually:

```shell
npm run lint:css # To check for linting issues
npm run lint:css:fix # To fix all auto-fixable issues
```

### Commit messages

This repo also uses `commitlint` to enforce a standard in regards to commit messages.

You can read up more on `commitlint` and the idea of conventional commits
[here](https://github.com/conventional-changelog/commitlint#what-is-commitlint).
Also
[here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)
and
[here](https://slides.com/marionebl/the-perks-of-committing-with-conventions#/).

Our specific ruleset is the
[`conventional`](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
one.

### Component standards

We can't lint everything, so these are the rules your component should follow to be approved for use in Mönster.

#### Use the tokens
CSS values, where possible, should use the design tokens defined in [variables](../src/sass/_colors.scss) and [colors](../src/sass/_colors.scss). "Magic" numbers (those not defined in the tokens), lead to inconsistencies and maintenance issues down the line.

#### One Block selector per component
We use [BEM](https://cssguidelin.es/#bem-like-naming) (Block Element Modifier) to style components. Each component file should only contain one Block selector. A Block selector is always associated with a component.

#### Files and folders match component Block selectors
Component files and folder names should match their Block selector name, but in PascalCase. This makes it easier to find components in the directory structure.

#### Parent provides layout, child fills the space
A component should always fill the space given to it (unless inline, like text or buttons). The parent component can provide a layout area for the child to fill.

#### Do not style other components
A component should never reference another component in its CSS. This prevents unexpected side effects when refactoring components.

#### Document every variation
Every variation of a component should be documented in Storybook. Any variations not documented should be assumed to be unused and deletable.

#### Unit testing
Defaults and all props on a component should be unit tested. Non-snapshots are preferred, but we understand they can be nessessary.

#### Primitive props
Primitive props are preferred where possible (string, number, etc). Simpler props are easier to test and provide more visibiliy of the possible permutations.

#### No code leaking
A components provides an interface (props and event emitters) and an output. Other than passing values to this interface, a components inner code should never be referenced anywhere else in the codebase to prevent unexpected side effects.

#### An element with a class needs a component
Any HTML element which has a class on it, should be componentised. By formalising the interface for a set of classes, they are more predictable, testable, and maintainable.

#### Group files by component
All code for a component should be grouped into the components folder. This includes Vue, CSS, Tests and Stories. This makes components easier to delete in the future.

#### M Prefix
All components and classes are prefixed with `M`/`m-` to denote they are from the `Mönster` module.

#### Internationalisation friendly
All components should support multiple languages via the props.

#### Multi-species friendly
Components that reference a species must be able to support multiple species (Not just cats & dogs).

#### Favour bottom margin
Where components must have a margin, a bottom margin is preferred to a top margin. By keeping all margin unidirectional the results of component interactions are more predicatable (less margin collapse rules to worry about).

#### Interactive elements must have hover and focus states
All interactive elements should show a visual difference when hovered on and when focused on. This helps to show the user what is interactive and aids keyboard navigation. An appropriate mouse pointer style should also be set.

#### Sass Variable formats
Sass variables should be kebab case and follow the format $[component]-[element]-[property]-[orientation]-[size]-[variant].
HTML element example: `$h1-font-size-small-hover: 2em;`
Component example: `$button-background-active: rebeccapurple;`

#### Themeable components
Components should include a set of `!default` theme variables at the top of their `style` block, allowing individual apps to over brand them using the design tokens or `patterns-theme` file.
