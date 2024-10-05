import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Anchor from './Anchor'

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  title: 'Anchor',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Anchor>

export const Default: Story = {
  args: {},
}
