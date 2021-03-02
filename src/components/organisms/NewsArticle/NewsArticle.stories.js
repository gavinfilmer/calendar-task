import { text } from '@storybook/addon-knobs'

import articleImageOne from '@/assets/placeholder/dog-food.jpg'
import articleImageTwo from '@/assets/placeholder/dog-ball.jpg'
import articleImageThree from '@/assets/placeholder/cat-bed.jpg'

import MNewsArticle from './MNewsArticle.vue'

const regularArticle = {
  articleImage: articleImageOne,
  title: 'Trending dog food diets',
  content:
    'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius a.',
}

const linkedArticle = {
  articleImage: articleImageThree,
  articleLink: '/news',
  title: 'Why cats sleep so much',
  content:
    'Etiam elit elit, elementum sed varius a non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
}

const taggedArticle = {
  articleImage: articleImageTwo,
  title: 'Best toy for energetic pets',
  content:
    'Etiam elit elit, elementum sed varius a non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
  tagText: 'Pet lifestyle',
}

const taggedLinkedArticle = {
  articleImage: articleImageOne,
  articleLink: '/news',
  title: 'How hot is too hot to walk your dog',
  content:
    'Mauris accumsan eros eget elit elit, elementum sed varius a non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
  tagText: 'Pet lifestyle',
}

export default {
  title: 'Organisms/News Article',
  component: MNewsArticle,
}

export const SingleCard = () => {
  return {
    components: { MNewsArticle },
    props: {
      tag: {
        default: text('Tag', 'Pet lifestyle'),
      },
      articleImage: {
        default: text('Image', articleImageOne),
      },
      title: {
        default: text('Title', 'How hot is too hot to walk your dog'),
      },
      content: {
        default: text(
          'Content',
          'Mauris accumsan eros eget elit elit, elementum sed varius a non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.'
        ),
      },
      link: {
        default: text('Link', '/news'),
      },
      date: {
        default: text('Date', '5 Sept 2019'),
      },
    },
    template: `
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <m-news-article
              :articleImage="articleImage"
              :title="title"
              :articleLink="link"
              :content="content"
              :tagText="tag"
              :date="date"
            />
          </div>
        </div>
      </div>
    `,
    data: () => ({ regularArticle }),
  }
}

const singleCardDocs = `
News Article card with the following fields (all text areas editable in
Storybook using the Knobs, and removable by deleting the content)

- Image
- Tag (not required)
- Title
- Content
- Date (not required)
- Link (not required)
`

SingleCard.parameters = {
  docs: {
    description: {
      story: singleCardDocs,
    },
  },
}

export const ScrollingList = () => {
  return {
    components: { MNewsArticle },
    template: `
      <section class="padded-block">
        <div class="container">
          <h2 class="text-center title-margin--xl">Pet health and happiness</h2>
        </div>
        <div class="container">
          <div class="m-article-scroll-list">
            <m-news-article class="m-article-scroll-list__item" v-bind="taggedLinkedArticle" />
            <m-news-article class="m-article-scroll-list__item" v-bind="taggedArticle" />
            <m-news-article class="m-article-scroll-list__item" v-bind="regularArticle" />
          </div>
        </div>
      </section>
    `,
    data: () => ({
      taggedLinkedArticle,
      taggedArticle,
      linkedArticle,
      regularArticle,
    }),
  }
}

ScrollingList.parameters = {
  info: true,
}
