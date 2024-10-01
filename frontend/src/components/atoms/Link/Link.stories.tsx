import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'ATOMS/Link',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    children: '예매처 바로가기',
    href: 'https://developer.mozilla.org/ko/',
  },
}

export const Secondary: Story = {
  args: {
    children: '예매처 바로가기',
    href: 'https://developer.mozilla.org/ko/',
    variant: 'secondary',
  },
}
