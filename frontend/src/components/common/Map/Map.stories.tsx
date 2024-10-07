import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Map from './Map'

const meta: Meta<typeof Map> = {
  component: Map,
  title: 'Map',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Map>

export const Default: Story = {
  args: {},
}
