import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import CommentSlider from './CommentSlider'

const meta: Meta<typeof CommentSlider> = {
  component: CommentSlider,
  title: 'MOLECULE/CommentSlider',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof CommentSlider>
export const Default: Story = {
  args: {
    comments: [
      {
        user: '안녕',
        rating: 5,
        comment: '정말 멋진 공연이었어요!',
      },
      {
        user: '홍길동',
        rating: 4,
        comment: '재밌었지만 조금 아쉬운 부분이 있었어요.',
      },
      {
        user: '김철수',
        rating: 3,
        comment: '그냥 그랬어요. 다음엔 더 잘할 수 있을 것 같아요.',
      },
      {
        user: '이영희',
        rating: 2,
        comment: '별로였어요. 기대한 만큼은 아니네요.',
      },
      {
        user: '박영수',
        rating: 1,
        comment: '솔직히 너무 실망했어요.',
      },
    ],
  },
}
