import type { Meta, StoryObj } from '@storybook/react';
import { Toast, type ToastProps } from '../components/Toast/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'error', 'info'],
    },
    duration: { control: 'number' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    type: 'success',
    duration: 3000,
  },
  render: (args: ToastProps) => {
    let message = '';
    switch (args.type) {
      case 'success':
        message = 'Operation successful!';
        break;
      case 'error':
        message = 'Operation failed!';
        break;
      case 'info':
        message = 'Here is some information.';
        break;
    }

    return <Toast {...args} message={message} />;
  },
};

export const ShortDuration: Story = {
  args: {
    type: 'info',
    message: 'Short toast',
    duration: 1000, 
  },
};

export const LongDuration: Story = {
  args: {
    type: 'info',
    message: 'Long toast',
    duration: 10000, 
  },
};
