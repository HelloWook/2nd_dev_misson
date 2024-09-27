import type { Meta, StoryObj } from '@storybook/react'

import Title from './Title'

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'AtOMS/Title',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: { children: 'Test' },
}
