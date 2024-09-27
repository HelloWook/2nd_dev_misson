import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Detail from './Detail'
import { TestUrl } from '@/Mock/Test'

const meta: Meta<typeof Detail> = {
  component: Detail,
  title: 'Template/Detail',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Detail>

const testPrice = [
  { seat: 'Vip', price: 160000 },
  { seat: 'R석', price: 140000 },
  { seat: 'S석', price: 110000 },
  { seat: 'A석', price: 80000 },
]

const eventInfo = [
  { title: '등급', value: '8세 관람가' },
  { title: '관람시간', value: '165분' },
  { title: '출연', value: '정성화, 양준모, 민우혁, 서영주, 이정열, 정재은, 김진수 등' },
]

export const Default: Story = {
  args: {
    eventID: 1,
    title: '폼폼푸린의 역습 ',
    date: '2024.09.14 ~ 2025.03.03마이아트뮤지엄',
    src: TestUrl,
    eventInfo,
    price: testPrice,
    performanceTime: '금 19:30 / 토 14:00, 18:30 / 일 14:00',
    ticketLink: 'https://www.naver.com',
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
