import staffTestimonialImage from '@/assets/placeholder/team-member.jpg'
import customerTestimonialImage from '@/assets/customer-testimonial-patsy.jpg'
import companyTestimonialImage from '@/assets/placeholder/team-picture.jpg'

import MTestimonial from './MTestimonial.vue'

const staffTestimonial = {
  testimonialImage: staffTestimonialImage,
  title: 'How would you describe the team?',
  text:
    'They are a lovely bunch of people! Very passionate about work and at the same time love to have fun - it`s a good balance. People here are extremely talented and very very friendly. I love the work culture, it keeps me motivated and excited every single day.',
  name: 'Shaa Ravi',
  role: 'Business Analyst',
  url: '/careers',
  linkText: 'We are hiring',
  staff: true,
}

const customerTestimonial = {
  testimonialImage: customerTestimonialImage,
  lead: 'What a great experience I had with your company',
  text:
    'Unfortunately our bulldog Patsy had to have an emergency operation, very out of the blue so as you can imagine, it was very upsetting for all of us. I wanted to focus on our poorly dog, which you enabled us to do.',
  url: '/',
  linkText: "Read Patsy's story",
  customerName: 'Colin, in Halifax',
  customer: true,
}

const companyTestimonial = {
  testimonialImage: companyTestimonialImage,
  title: 'Work at Bought By Many',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis felis eget eros malesuada auctor.',
  url: '/careers',
  linkText: 'Careers at Bought By Many',
  linkClasses: 'primary',
  staff: true,
}

const docs = `
Area displaying Testimonial quote along side accompanying image and author details.

Used to support surrounding content with relevance, legitimacy and social proof. It can be great in amplifying company values relevant to the page content.

## Functionality
Personnel testimonials are randomised on page load,  In the future, randomising can be based on ‘value’ keywords tagged to each testimonial.

## Layout
For responsive behaviour on xl screens, this organism will have a fixed height of 600dp.

- _Desktop/Tablet_: 50/50 layout
- _Mobile_: Stacked layout

## Context of use
Placed near the end or the middle of a page as a peripheral visual.

## Elements
- Profile image
- Title
- Quote
- Name
- Role
- Text Link (Optional)

## Design criteria
To prevent unnatural framing of a profile image when the image container goes responsive on large screens, all images should be cropped using the rule of thirds aligned to the eyes.
`

export default {
  title: 'Organisms/Testimonial',
  component: MTestimonial,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
}

export const StaffQuote = () => {
  return {
    components: { MTestimonial },
    template: `
      <div class="background--grey-green">
        <m-testimonial v-bind="testimonial" />
      </div>
    `,
    data: () => ({ testimonial: staffTestimonial }),
  }
}

export const CustomerQuote = () => {
  return {
    components: { MTestimonial },
    template: `
      <div class="background--grey-green">
        <m-testimonial v-bind="testimonial" />
      </div>
    `,
    data: () => ({ testimonial: customerTestimonial }),
  }
}

export const CompanyQuoteWithButton = () => {
  return {
    components: { MTestimonial },
    template: `
      <div class="background--grey-green">
        <m-testimonial v-bind="testimonial" />
      </div>
    `,
    data: () => ({ testimonial: companyTestimonial }),
  }
}
