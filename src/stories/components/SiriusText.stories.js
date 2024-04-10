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
  // children: 'Button',
  // type = 'primary', 'default', 'dashed', 'text', 'link',
  type: 'primary',
  // disabled: true,
  // loading: true,
  // onClick,
};

export const Default = {
  type: 'default',
};

export const Dashed = {
  type: 'dashed',
};

export const Text = {
  type: 'text',
};

export const Link = {
  type: 'link',
};
