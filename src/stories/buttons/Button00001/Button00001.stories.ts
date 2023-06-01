import type { Meta, StoryObj } from '@storybook/react';

import { Button00001 } from './Button00001';

const meta = {
    title: 'Buttons/Button00001',
    component: Button00001,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Button00001>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        backgroundColor: '#f354aa',
        children: 'Click me'
    }
};

export const BorderRadiusMedium: Story = {
    args: {
        backgroundColor: '#f354aa',
        borderRadius: 'medium',
        children: 'Click me'
    }
};

export const SmallButton: Story = {
    args: {
        backgroundColor: '#f354aa',
        children: 'Click me',
        size: 'small'
    }
};

export const MediumButton: Story = {
    args: {
        backgroundColor: '#f354aa',
        children: 'Click me',
        size: 'medium'
    }
};

export const LargeButton: Story = {
    args: {
        backgroundColor: '#f354aa',
        children: 'Click me',
        size: 'large'
    }
};
