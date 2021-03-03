# Calendar task

> FE dev task to build a Calendar widget within Storybook

## Instructions

We would like you to build out a calendar widget within storybook. This is
primarily an HTML/CSS task, but will touch on the lighter side of Vue/Javascript.

The storybook project already has some atomic components and SCSS variables,
which you are welcome to use to assist you. We would expect a mobile-first
approach, using BEM in the SASS, and creating reusable, content-agnostic
components that would be easily adopted across different projects and in
multiple regions.

![image](https://user-images.githubusercontent.com/47392494/109778766-1db0cb00-7bfd-11eb-9af2-c3d6e91b09ea.png)


## Requirements
- Node.js

## Getting set up
1. Clone the repository.
  `git clone git@github.com:boughtbymany/fe-candidate-task-[your_github_username].git`
2. Install dependencies
  `npm install`
3. Run Storybook
  `npm run storybook`


## A few things to help get you started

 - The calendar HTML should live in `Calendar.vue` and should be visible in storybook using a `.stories` file to create it’s own story/stories
 - CSS should be written in SASS. Grunt is set up to watch your SASS files, so just save the SASS file and refresh the page in your browser to see your changes
 - The calendar component needs to be responsive. There is a mobile and desktop design
 - Please re-use existing variables where you can (these can be found in `/scss/framework/_variables.scss`)
 - To save you time we've created the icons you need. Take a look at the icons story in storybook to see the icons available to you and how to use them
