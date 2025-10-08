import type { Meta, StoryObj } from '@storybook/react';
import { Instructions } from '../../features/apple-catch/components/Instructions/Instructions';

const meta: Meta<typeof Instructions> = {
  title: 'Features/AppleCatch/Components/Instructions',
  component: Instructions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};