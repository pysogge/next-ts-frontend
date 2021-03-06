// import { addDecorator } from '@storybook/react'
// import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/themes/global'

/* addDecorator(withNextRouter()) */

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
