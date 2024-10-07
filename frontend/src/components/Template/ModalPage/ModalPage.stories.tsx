import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import ModalPage from './ModalPage'

const meta: Meta<typeof ModalPage> = {
  component: ModalPage,
  title: 'ModalPage',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof ModalPage>

export const Default: Story = {
  args: {},
}
