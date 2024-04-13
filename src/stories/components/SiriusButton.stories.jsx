import {fn} from '@storybook/test';
import {SiriusButton} from '../../components/base/SiriusButton/SiriusButton';

export default {
  title: 'Sirius Components/Button',
  component: SiriusButton,
  parameters: {layout: 'center'},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Button',
    onClick: fn(),
  },
};

export const Primary = {
  args: {
    // children: 'Button',
    // type = 'primary', 'default', 'dashed', 'text', 'link',
    type: 'primary',
    // disabled: true,
    // loading: true,
    // onClick,
  }
};

export const Default = {
  args: {
    type: 'default',
  }
};

export const Dashed = {
  args: {
    type: 'dashed',
  }
};

export const Text = {
  args: {
    type: 'text',
  }
};

export const Link = {
  args: {
    type: 'link',
  }
};
