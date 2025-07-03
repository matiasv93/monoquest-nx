import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithText: Story = {
  args: {
    children: 'Loading...',
  },
};

export const Hidden: Story = {
  args: {
    show: false,
  },
};

export const CustomColor: Story = {
  args: {
    className: 'text-red-500',
    size: 'large',
    children: 'Custom color',
  },
};
