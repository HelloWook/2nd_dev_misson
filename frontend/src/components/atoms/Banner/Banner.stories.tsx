import type { Meta, StoryObj } from '@storybook/react'

import Banner from './Banner'

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'Atoms/Banner',
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: 'number',
    },
  },
}
export default meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {}
export const SliderBanner: Story = {
  args: {
    height: 564,
  },
}
