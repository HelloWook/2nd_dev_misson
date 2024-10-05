import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import EventDetail from './EventDetail'
import { testEventInfo } from '@/Mock/Test'

const meta: Meta<typeof EventDetail> = {
  component: EventDetail,
  title: 'Molecule/EventDetail',
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ height: '600px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof EventDetail>

export const Default: Story = {
  args: {
    ...testEventInfo,
  },
}
