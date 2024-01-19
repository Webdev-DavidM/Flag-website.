import type { Meta, StoryObj } from '@storybook/react';
import Flag from './Flag';
import data from '../../data.json';

type Story = StoryObj<typeof Flag>;
const meta: Meta<typeof Flag> = {
  title: 'Flag',
  component: Flag,
  decorators: [
    (Story) => (
      <div style={{ width: '100vw', backgroundColor: 'red' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: Story = {
  args: {
    flag: {
      ...data[22],
    },
  },
};
