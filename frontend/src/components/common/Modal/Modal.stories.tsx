import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal'
import { testRecommendPerformanceData } from '@/Mock/Test'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'ORGANIMS/Modal',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    closeModal: () => {
      alert('반갑당')
    },
  },
}
