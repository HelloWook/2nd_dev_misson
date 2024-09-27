import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import ButtonGroup from './ButtonGroup'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'MOLECULE/ButtonGroup',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  args: {},
}
