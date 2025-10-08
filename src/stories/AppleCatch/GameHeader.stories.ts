import type { Meta, StoryObj } from '@storybook/react';
import { GameHeader } from '../../features/apple-catch/components/GameHeader/GameHeader';

const meta: Meta<typeof GameHeader> = {
  title: 'Features/AppleCatch/Components/GameHeader',
  component: GameHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    score: 150,
    lives: 3,
  },
};

export const HighScore: Story = {
  args: {
    score: 999,
    lives: 1,
  },
};