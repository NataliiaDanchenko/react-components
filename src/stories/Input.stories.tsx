import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
    },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    clearable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: 'text',
    value: 'Hello!',
    placeholder: 'Enter text',
    clearable: false,
    onChange: (value: string) => console.log('Text:', value),
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    value: 'secret',
    placeholder: 'Enter password',
    clearable: true,
    onChange: (value: string) => console.log('Password:', value),
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    value: '42',
    placeholder: 'Enter number',
    clearable: true,
    onChange: (value: string) => console.log('Number:', value),
  },
};
