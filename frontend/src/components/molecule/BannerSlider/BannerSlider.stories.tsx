import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import BannerSlider from './BannerSlider'

const meta: Meta<typeof BannerSlider> = {
  component: BannerSlider,
  title: 'MOlECULE/BannerSlider',
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '1200px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof BannerSlider>

export const Default: Story = {
  args: {},
}
