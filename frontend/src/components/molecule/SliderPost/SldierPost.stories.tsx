import type { Meta, StoryObj } from '@storybook/react'

import SldierPost from './SldierPost'

const meta: Meta<typeof SldierPost> = {
  component: SldierPost,
  title: 'MOLECULE/SldierPost',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SldierPost>

export const Default: Story = {
  args: {
    SliderPostTitle: '15주년 기념공연, 영웅',
    SliderPostLocation: '예술의 전당',
    SliderPostDate: '2024.08.06~2024.09.02',
  },
}
