# @Yendes Softwares Storybook React TypeScript

## Index

-   Technologies
-   Development mode
-   Clean a project build
-   Create a build
-   Serve Storybook build locally
-   Creating a story

## Technologies

-   Docker
-   Eslint
-   Git
-   NodeJS
-   Pnpm
-   Prettier
-   Props Types
-   Sass
-   Storybook
-   TypeScript
-   Vite
-   Vscode

## Development mode

To run development mode, we need to code the following command on cli:

```bash
# npm
npm dev

# yarn
yarn dev

# pnpm
pnpm dev
```

## Clean a project build

```bash
# npm
npm run clean

# yarn
yarn clean

# pnpm
pnpm clean
```

## Create a build

To build our Storybook app, we need to code the following command on cli:

```bash
# npm
npm run build

# yarn
yarn build

# pnpm
pnpm build
```

## Serve Storybook build locally

To serve storybook locally we need to install server as global dependency:

```bash
# npm
npm install -g serve

# yarn
yarn global add serve

# pnpm
pnpm global add serve
```

After:

```bash
serve storybook-static
```

## Creating a story

Story on Storybook are define using file Component.stories.tsx and define the following structure in this example:

```typescript
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
```