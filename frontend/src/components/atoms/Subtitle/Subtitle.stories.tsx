import type { Meta, StoryObj } from '@storybook/react'

import Subtitle from './Subtitle'

const meta: Meta<typeof Subtitle> = {
  component: Subtitle,
  title: 'Atoms/Subtitle',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
}
export default meta

type Story = StoryObj<typeof Subtitle>

export const Default: Story = {
  args: {
    children: "What's Hot",
  },
}
