import type { Meta, StoryObj } from '@storybook/react';
import { ScoreDisplay } from '../../features/apple-catch/components/ScoreDisplay/ScoreDisplay';

const meta: Meta<typeof ScoreDisplay> = {
  title: 'Features/AppleCatch/Components/ScoreDisplay',
  component: ScoreDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Score: Story = {
  args: {
    label: 'スコア',
    value: 150,
  },
};

export const Lives: Story = {
  args: {
    label: 'ライフ',
    value: 3,
  },
};