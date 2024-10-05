import type { Preview } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/styles/globalStyles'
import { RouterProvider } from 'react-router-dom'
import router from '../src/router'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
}

export default preview
