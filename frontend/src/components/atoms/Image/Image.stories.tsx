import type { Meta, StoryObj } from '@storybook/react'
import Image from './Image'

const TestUrl: string = 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426'

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'ATOMS/Image',
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    radius: {
      control: 'number',
    },
    src: {
      control: 'text',
    },
  },
}
export default meta

type Story = StoryObj<typeof Image>

export const Default: Story = {
  args: {
    src: TestUrl,
  },
}

export const RadiusIamge: Story = {
  args: {
    src: TestUrl,
    width: 430,
    height: 722,
  },
}

export const DetailIamge: Story = {
  args: {
    src: TestUrl,
    radius: 30,
    width: 530,
    height: 311,
  },
}

export const PosterIamge: Story = {
  args: {
    src: TestUrl,
    radius: 30,
    width: 231,
    height: 311,
  },
}
