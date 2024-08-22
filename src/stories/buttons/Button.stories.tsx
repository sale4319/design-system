import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Fill: Story = {
  render: () => <Button primary label='Fill' mode='fill' />,
};

export const Pulse: Story = {
  render: () => <Button label='Pulse' mode='pulse' />,
};

export const Close: Story = {
  render: () => <Button label='Close' mode='close' />,
};

export const Raise: Story = {
  render: () => <Button label='Raise' mode='raise' />,
};

export const Up: Story = {
  render: () => <Button label='Fill Up' mode='up' />,
};

export const Slide: Story = {
  render: () => <Button label='Slide' mode='slide' />,
};

export const Offset: Story = {
  render: () => <Button label='Offset' mode='offset' />,
};
