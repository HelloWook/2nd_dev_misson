import type { Meta, StoryObj } from '@storybook/react'

import SearchPost from './SearchPost'

const meta: Meta<typeof SearchPost> = {
  component: SearchPost,
  title: 'MOLECULE/SearchPost',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SearchPost>

export const Default: Story = {
  args: {
    width: '235',
    SearchPostTitle: '15주년 기념공연, 영웅',
    SearchPostLocation: '예술의 전당',
    SearchPostDate: '2024.08.06~2024.09.02',
  },
}

export const Recommend: Story = {
  args: {
    width: '180',
    variant: 'secondary',
    SearchPostTitle: '15주년 기념공연, 영웅',
    SearchPostLocation: '예술의 전당',
    SearchPostDate: '2024.08.06~2024.09.02',
  },
}
