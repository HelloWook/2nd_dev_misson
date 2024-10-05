import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'ATOMS/Button',
  tags: ['autodocs'],
  argTypes: {
    ButtonSummary: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    radius: {
      control: 'number',
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    ButtonSummary: ' 반갑다',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    width: 121,
    height: 65,
    radius: 48,
    ButtonSummary: '공연',
  },
}

export const Third: Story = {
  args: {
    variant: 'third',
    ButtonSummary: '공연',
    height: 60,
  },
}
