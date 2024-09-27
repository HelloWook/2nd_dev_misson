import type { Meta, StoryObj } from '@storybook/react'

import Line from './Line'

const meta: Meta<typeof Line> = {
  component: Line,
  title: 'ATOMS/Line',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Line>

export const Default: Story = {
  args: {},
}
