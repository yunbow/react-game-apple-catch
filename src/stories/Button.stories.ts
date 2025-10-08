import type { Meta, StoryObj } from '@storybook/react';
// Simple mock function for Storybook actions
const fn = () => () => {};
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'もう一度プレイ',
  },
};