import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Filter from './Filter'

const meta: Meta<typeof Filter> = {
  component: Filter,
  title: 'ORGANIMS/Filter',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Filter>

export const Default: Story = {
  args: {},
}
