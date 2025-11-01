import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  SidebarMenu,
  type SidebarMenuProps,
} from '../components/SideBarMenu/SideBarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    isOpen: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Dashboard',
      },
      {
        label: 'Products',

        submenu: [
          {
            label: 'All Products',
          },
          {
            label: 'Add Product',
          },
        ],
      },
      {
        label: 'Settings',

        submenu: [
          {
            label: 'Profile',
          },
          {
            label: 'Security',
          },
        ],
      },
    ],
    isOpen: true,
  },
  render: (args: SidebarMenuProps) => {
    const [open, setOpen] = useState(args.isOpen);

    return (
      <SidebarMenu
        {...args}
        isOpen={open}
        onClose={() => setOpen(false)} 
      />
    );
  },
};
