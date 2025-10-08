import type { Meta, StoryObj } from '@storybook/react';
import { Apple } from '../../features/apple-catch/components/Apple/Apple';

const meta: Meta<typeof Apple> = {
  title: 'Features/AppleCatch/Components/Apple',
  component: Apple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    apple: {
      id: '1',
      x: 0,
      y: 0,
      isBonus: false,
    },
  },
};

export const Bonus: Story = {
  args: {
    apple: {
      id: '2',
      x: 0,
      y: 0,
      isBonus: true,
    },
  },
};