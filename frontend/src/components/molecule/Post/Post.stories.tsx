import type { Meta, StoryObj } from '@storybook/react'

import Post from './Post'

const meta: Meta<typeof Post> = {
  component: Post,
  title: 'MoleCULE/Post',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Post>

export const Default: Story = {
  args: {
    postTitle: 'Event B',
    postSummary: 'Date: July 10, Venue: Hall Y',
  },
}
