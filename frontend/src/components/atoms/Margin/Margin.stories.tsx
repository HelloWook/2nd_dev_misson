import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Margin from './Margin'

const meta: Meta<typeof Margin> = {
  component: Margin,
  title: 'Atoms/Margin',
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div>
        <Story />
        <h1>반갑다 </h1>
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Margin>

export const Default: Story = {
  args: {
    bottom: 100,
  },
}
