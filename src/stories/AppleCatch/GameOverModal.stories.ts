import type { Meta, StoryObj } from '@storybook/react';
// Simple mock function for Storybook actions
const fn = () => () => {};
import { GameOverModal } from '../../features/apple-catch/components/GameOverModal/GameOverModal';

const meta: Meta<typeof GameOverModal> = {
  title: 'Features/AppleCatch/Components/GameOverModal',
  component: GameOverModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onRestart: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  args: {
    isVisible: true,
    finalScore: 250,
  },
};

export const Hidden: Story = {
  args: {
    isVisible: false,
    finalScore: 250,
  },
};