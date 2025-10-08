import type { Meta, StoryObj } from '@storybook/react';
import { AppleCatchGame } from '../../features/apple-catch/components/AppleCatchGame/AppleCatchGame';

const meta: Meta<typeof AppleCatchGame> = {
  title: 'Features/AppleCatch/Components/AppleCatchGame',
  component: AppleCatchGame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};